<?php

namespace experience\meld\services;

use yii\base\Component;

class Meld extends Component
{
    /**
     * Return every possible combination of the given prefixes and suffixes
     *
     * @param array|string $prefixes
     * @param array|string $suffixes
     *
     * @return array|string
     */
    public function meld($prefixes, $suffixes)
    {
        $shouldReturnArray = $this->shouldReturnArray($prefixes, $suffixes);

        $prefixes = $this->normalizeInput($prefixes);
        $suffixes = $this->normalizeInput($suffixes);

        $result = $this->meldNormalized($prefixes, $suffixes);

        return $shouldReturnArray ? $result : $result[0];
    }

    /**
     * Should Meld return an array?
     *
     * @param mixed $prefix
     * @param mixed $suffix
     *
     * @return bool
     */
    protected function shouldReturnArray($prefix, $suffix)
    {
        return is_array($prefix) || is_array($suffix);
    }

    /**
     * Normalise an input parameter
     *
     * @param mixed $input
     *
     * @return array
     */
    protected function normalizeInput($input)
    {
        if (! is_array($input)) {
            $input = [$input];
        }

        return array_map(function ($item) {
            return $this->normalizeItem($item);
        }, $input);
    }

    /**
     * Combine the normalised prefixes and suffixes
     *
     * @param string[] $prefixes
     * @param string[] $suffixes
     *
     * @return string[]
     */
    protected function meldNormalized(array $prefixes, array $suffixes): array
    {
        $combinations = [];

        foreach ($prefixes as $prefix) {
            foreach ($suffixes as $suffix) {
                $combinations[] = $prefix . $suffix;
            }
        }

        return array_unique($combinations);
    }

    /**
     * Coerce the given item to a string
     *
     * @param mixed $value
     *
     * @return string
     */
    protected function normalizeItem($value): string
    {
        if (is_array($value)) {
            $value = '';
        }

        if (is_object($value)) {
            $value = method_exists($value, '__toString') ? (string) $value : '';
        }

        if (is_bool($value)) {
            $value = ($value === true) ? '1' : '0';
        }

        return $value;
    }
}
