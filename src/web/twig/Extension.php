<?php

namespace experience\meld\web\twig;

use Craft;
use experience\meld\Meld;
use Twig_Extension;
use Twig_Markup;
use Twig_SimpleFilter;

class Extension extends Twig_Extension
{
    /**
     * @var Meld
     */
    protected static $plugin;

    /**
     * Initialise the extension
     */
    public function __construct()
    {
        if (is_null(static::$plugin)) {
            static::$plugin = Meld::getInstance();
        }
    }

    /**
     * The Twig filters provided by this extension
     *
     * @return array
     */
    public function getFilters(): array
    {
        return [
            'meld' => new Twig_SimpleFilter('meld', [$this, 'meldFilter'])
        ];
    }

    /**
     * Return every possible combination of the given prefixes and suffixes
     *
     * @param mixed $prefixes
     * @param mixed $suffixes
     *
     * @return array|string
     */
    public function meldFilter($prefixes, $suffixes)
    {
        return static::$plugin->meld->meld($prefixes, $suffixes);
    }
}
