<?php

namespace experience\meld;

use Craft;
use craft\base\Plugin;
use experience\meld\services\Meld as MeldService;
use experience\meld\web\twig\Extension;

class Meld extends Plugin
{
    /**
     * Initialise the plugin
     *
     * @throws \yii\base\InvalidConfigException
     */
    public function init()
    {
        parent::init();

        $this->registerServices();
        $this->registerTwigExtensions();
    }

    /**
     * Register the plugin services
     *
     * @throws \yii\base\InvalidConfigException
     */
    protected function registerServices()
    {
        $this->set('meld', MeldService::class);
    }

    /**
     * Register the plugin Twig extensions
     */
    protected function registerTwigExtensions()
    {
        if (Craft::$app->request->getIsSiteRequest()) {
            Craft::$app->view->registerTwigExtension(new Extension);
        }
    }
}
