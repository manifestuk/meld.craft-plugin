<?php

/**
 * TransactionHelper
 *
 * @package Experience\Meld\App\Helpers
 */

namespace Experience\Meld\App\Helpers;

use CDbConnection;
use CDbTransaction;

/**
 * Provides helper methods for working with Craft's database transactions.
 */
class TransactionHelper
{
    /**
     * The Craft database connection.
     *
     * @var CDbConnection
     */
    protected $db;

    /**
     * Constructor.
     *
     * @param CDbConnection $db
     */
    public function __construct(CDbConnection $db)
    {
        $this->db = $db;
    }

    /**
     * If a database transaction does not exist, begins a new transaction, and
     * returns it. If a database transaction already exists, returns null.
     *
     * @return CDbTransaction|null
     */
    public function begin()
    {
        return is_null($this->db->getCurrentTransaction())
            ? $this->db->beginTransaction()
            : null;
    }

    /**
     * Commits the transaction, if it is a valid transaction.
     *
     * @param mixed $transaction
     */
    public function commit($transaction)
    {
        if ($this->isValidTransaction($transaction)) {
            $transaction->commit();
        }
    }

    /**
     * Returns a boolean, indicating whether the given argument is a valid
     * transaction.
     *
     * @param mixed $transaction
     *
     * @return bool
     */
    protected function isValidTransaction($transaction)
    {
        return ($transaction instanceof CDbTransaction);
    }

    /**
     * Rolls back the transaction, if it is a valid transaction.
     *
     * @param mixed $transaction
     */
    public function rollback($transaction)
    {
        if ($this->isValidTransaction($transaction)) {
            $transaction->rollback();
        }
    }
}
