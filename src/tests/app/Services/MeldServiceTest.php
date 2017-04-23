<?php

/**
 * MeldService tests.
 *
 * @package Experience\Meld\Tests\App\Services
 * @author  Stephen Lewis <stephen@experiencehq.net>
 */

namespace Experience\Meld\Tests\App\Services;

use Experience\Meld\App\Services\MeldService;
use Experience\Meld\Tests\BaseTest;

/**
 * Class MeldServiceTest
 *
 * @package Experience\Meld\Tests\App\Services
 */
class MeldServiceTest extends BaseTest
{
    /**
     * @var MeldService
     */
    protected $subject;

    public function setUp()
    {
        $this->subject = new MeldService();
    }

    public function testItMeldsTwoStrings()
    {
        $this->assertEquals(
            'HelloWorld',
            $this->subject->meld('Hello', 'World')
        );
    }

    public function testItMeldsAnArrayOfSuffixesToAStringPrefix()
    {
        $prefix = 'Hello';
        $suffix = ['World', 'Sailor'];
        $expected = ['HelloWorld', 'HelloSailor'];

        $this->assertEquals($expected, $this->subject->meld($prefix, $suffix));
    }

    public function testIMeldsAnArrayOfPrefixesToAStringSuffix()
    {
        $prefix = ['Hello', 'Goodbye'];
        $suffix = 'World';
        $expected = ['HelloWorld', 'GoodbyeWorld'];

        $this->assertEquals($expected, $this->subject->meld($prefix, $suffix));
    }

    public function testItMeldsAnArrayOfPrefixesToAnArrayOfSuffixes()
    {
        $prefix = ['Hello', 'Goodbye'];
        $suffix = ['World', 'Sailor'];

        $expected = [
            'HelloWorld',
            'HelloSailor',
            'GoodbyeWorld',
            'GoodbyeSailor',
        ];

        $this->assertEquals($expected, $this->subject->meld($prefix, $suffix));
    }

    public function testItConvertsNumbersToStrings()
    {
        $prefix = 50;
        $suffix = 50.0;
        $this->assertEquals('5050.0', $this->subject->meld($prefix, $suffix));
    }

    public function testItConvertsArraysToEmptyStrings()
    {
        $prefix = [['John'], 'Jane'];
        $suffix = 'Doe';
        $expected = ['Doe', 'JaneDoe'];

        $this->assertEquals($expected, $this->subject->meld($prefix, $suffix));
    }

    public function testItConvertsStringifiableObjectsToStrings()
    {
        $prefix = new Stringifiable('Hello');
        $suffix = 'World';

        $this->assertEquals(
            'HelloWorld',
            $this->subject->meld($prefix, $suffix)
        );
    }

    public function testItConvertsNonStringifiableObjectsToAnEmptyString()
    {
        $prefix = new \stdClass();
        $suffix = 'World';

        $this->assertEquals('World', $this->subject->meld($prefix, $suffix));
    }

    public function testItConvertsBooleanValuesToZeroOrOne()
    {
        $prefix = true;
        $suffix = false;
        $this->assertEquals('10', $this->subject->meld($prefix, $suffix));
    }
}

/**
 * Test class, which may be converted to a string.
 *
 * @package Experience\Meld\Tests\App\Services
 */
class Stringifiable
{
    protected $name;

    /**
     * Constructor.
     *
     * @param string $name
     */
    public function __construct($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the string representation of the instance.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->name;
    }
}
