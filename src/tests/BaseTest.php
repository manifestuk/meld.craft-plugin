<?php

/**
 * BaseTest.
 *
 * @package Experience\Meld\Tests
 */

namespace Experience\Meld\Tests;

use \Mockery as m;
use \PHPUnit_Framework_TestCase;

/**
 * Base Meld test case.
 */
abstract class BaseTest extends PHPUnit_Framework_TestCase
{
    /**
     * Cleans up after each test.
     */
    public function tearDown()
    {
        m::close();
    }
}
