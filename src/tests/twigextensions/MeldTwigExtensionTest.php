<?php

/**
 * Twig extension tests.
 *
 * @package Experience\Meld\Tests\TwigExtensions
 * @author  Stephen Lewis <stephen@experiencehq.net>
 */

namespace Experience\Meld\Tests\TwigExtensions;

use Craft\MeldTwigExtension;
use Experience\Meld\App\Services\MeldService;
use Experience\Meld\Tests\BaseTest;
use Twig_Environment;
use Twig_Loader_Array;

/**
 * Class MeldTwigExtensionTest
 *
 * @package Experience\Meld\Tests\TwigExtensions
 */
class MeldTwigExtensionTest extends BaseTest
{
    /**
     * @var Twig_Environment
     */
    protected $twig;

    public function setUp()
    {
        $templates = [
            'single'   => "{{ prefix|meld(suffix) }}",
            'multiple' => "{% set items = prefix|meld(suffix) %}{% for item in items %}{{ item }};{% endfor %}",
            'chained'  => "{{ prefix|meld(suffix)|lower }}",
        ];

        $this->twig = new Twig_Environment(new Twig_Loader_Array($templates));
        $this->twig->addExtension(new MeldTwigExtension(new MeldService()));
    }

    public function testItMeldsTwoStrings()
    {
        $context = ['prefix' => 'Hello', 'suffix' => 'World'];

        $this->assertEquals(
            'HelloWorld',
            $this->renderTemplate('single', $context)
        );
    }

    /**
     * Renders the given string template, using the given context data, and
     * returns the result.
     *
     * @param string $template
     * @param array  $context
     *
     * @return string
     */
    protected function renderTemplate($template, array $context)
    {
        return $this->twig->render($template, $context);
    }

    public function testItMeldsAStringAnArray()
    {
        $context = [
            'prefix' => 'Hello',
            'suffix' => ['World', 'Sailor'],
        ];

        $this->assertEquals(
            'HelloWorld;HelloSailor;',
            $this->renderTemplate('multiple', $context)
        );
    }

    public function testItIsChainable()
    {
        $context = ['prefix' => 'Hello', 'suffix' => 'World'];

        $this->assertEquals(
            'helloworld',
            $this->renderTemplate('chained', $context)
        );
    }
}
