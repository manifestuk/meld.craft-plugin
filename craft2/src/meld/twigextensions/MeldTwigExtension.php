<?php

/**
 * Meld Twig extension.
 *
 * @package Craft
 * @author  Stephen Lewis <stephen@experiencehq.net>
 */

namespace Craft;

use Experience\Meld\App\Services\MeldService;
use Twig_Extension;
use Twig_SimpleFilter;

/**
 * Class MeldTwigExtension
 *
 * @package Craft
 */
class MeldTwigExtension extends Twig_Extension
{
    /**
     * The service which does the melding.
     *
     * @var MeldService
     */
    protected $service;

    /**
     * Constructor.
     *
     * @param MeldService $service
     */
    public function __construct(MeldService $service)
    {
        $this->service = $service;
    }

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return 'Meld';
    }

    /**
     * @inheritdoc
     */
    public function getFilters()
    {
        return [
            'meld' => new Twig_SimpleFilter('meld', [$this, 'meldFilter']),
        ];
    }

    /**
     * Melds the given prefix and suffix, and returns the result.
     *
     * @param mixed $prefix
     * @param mixed $suffix
     *
     * @return array|string
     */
    public function meldFilter($prefix, $suffix)
    {
        return $this->service->meld($prefix, $suffix);
    }
}
