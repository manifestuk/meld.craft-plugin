<?php

/**
 * PluginServiceProvider
 *
 * @package Experience\Meld\App\ServiceProviders
 */

namespace Experience\Meld\App\ServiceProviders;

use Craft\MeldPlugin;
use League\Container\ContainerInterface;
use League\Container\ServiceProvider\AbstractServiceProvider;
use Experience\Meld\App\Helpers\TranslationHelper;
use Experience\Meld\App\Helpers\TransactionHelper;
use Experience\Meld\App\Utilities\Logger;

/**
 * Populates the plugin's IoC container.
 */
class PluginServiceProvider extends AbstractServiceProvider
{
    /**
     * A list of object keys stored in the IoC container.
     *
     * @var array
     */
    protected $provides = ['Logger'];

    /**
     * The IoC container.
     *
     * @var ContainerInterface
     */
    protected $container;

    /**
     * The Craft application.
     *
     * @var \Craft\ConsoleApp|\Craft\WebApp
     */
    protected $craft;

    /**
     * The plugin instance.
     *
     * @var BasePlugin
     */
    protected $plugin;

    /**
     * Constructor.
     *
     * @param \Craft\ConsoleApp|\Craft\WebApp $craft
     * @param MeldPlugin $plugin
     */
    public function __construct($craft, MeldPlugin $plugin)
    {
        $this->craft = $craft;
        $this->plugin = $plugin;
    }

    /**
     * Registers items with the container.
     */
    public function register()
    {
        $this->initializeLogger();
        $this->initializeTransactionHelper();
        $this->initializeTranslationHelper();
    }

    /**
     * Initialises the logger.
     */
    protected function initializeLogger()
    {
        $this->container->add('Logger', new Logger);
    }

    /**
     * Initialises the transaction helper.
     */
    protected function initializeTransactionHelper()
    {
        $this->container->add(
            'TransactionHelper',
            new TransactionHelper($this->craft->db)
        );
    }

    /**
     * Initialises the translation helper.
     */
    protected function initializeTranslationHelper()
    {
        $this->container->add('TranslationHelper', new TranslationHelper);
    }
}
