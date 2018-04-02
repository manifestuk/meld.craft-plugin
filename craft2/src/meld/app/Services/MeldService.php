<?php

/**
 * The behind-the-scenes, testable cohort of the plugin's main service class.
 *
 * @package Experience\Meld\App\Services
 * @author  Stephen Lewis <stephen@experiencehq.net>
 */

namespace Experience\Meld\App\Services;

/**
 * Class MeldService
 *
 * @package Experience\Meld\App\Services
 */
class MeldService
{
    /**
     * Melds the given prefix(es) and suffix(es), and returns the result.
     *
     * @param mixed $prefix
     * @param mixed $suffix
     *
     * @return array|string
     */
    public function meld($prefix, $suffix)
    {
        $returnArray = $this->isReturnTypeArray($prefix, $suffix);
        $prefix = $this->normalizeMeldParameter($prefix);
        $suffix = $this->normalizeMeldParameter($suffix);
        $result = [];

        foreach ($prefix as $p) {
            foreach ($suffix as $s) {
                $result[] = $this->meldPair($p, $s);
            }
        }

        return $returnArray ? $result : $result[0];
    }

    /**
     * Determines whether either of the given inputs is an array. If so, we
     * should return an array of strings. Otherwise, we should return a string.
     *
     * @param mixed $prefix
     * @param mixed $suffix
     *
     * @return bool
     */
    protected function isReturnTypeArray($prefix, $suffix)
    {
        return is_array($prefix) || is_array($suffix);
    }

    /**
     * Normalises the given "prefixes" or "suffixes" parameter, by ensuring
     * that it's an array we can loop through.
     *
     * @param mixed $value
     *
     * @return array
     */
    protected function normalizeMeldParameter($value)
    {
        return is_array($value) ? $value : [$value];
    }

    /**
     * Melds the given pair, and returns the result.
     *
     * @param mixed $prefix
     * @param mixed $suffix
     *
     * @return string
     */
    protected function meldPair($prefix, $suffix)
    {
        $prefix = $this->normalizeMeldPairParameter($prefix);
        $suffix = $this->normalizeMeldPairParameter($suffix);
        return $prefix . $suffix;
    }

    /**
     * Normalises the given "pair" parameter, to ensure it's a string.
     *
     * @param mixed $value
     *
     * @return string
     */
    protected function normalizeMeldPairParameter($value)
    {
        if (is_array($value)) {
            $value = '';
        }

        if (is_object($value)) {
            $value = method_exists($value, '__toString') ? (string)$value : '';
        }

        if (is_bool($value)) {
            $value = ($value === true) ? '1' : '0';
        }

        return $value;
    }
}
