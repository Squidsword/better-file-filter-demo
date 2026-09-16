# Better GitHub File Filter — Demo

A short demo of **[Better GitHub File Filter](https://github.com/Squidsword/better-github-file-filter)**,
a Chromium extension that upgrades GitHub's pull-request **File filter** to bucket files by
their full compound extension (e.g. `.tsx` vs `.test.tsx`) instead of just the last segment.

## The problem it solves

GitHub keys the filter on the last dot-segment only, so `Foo.tsx` and `Foo.test.tsx` collapse
into a single `.tsx` bucket — there's no way to hide tests while reviewing source.

## What the extension does

Splits that into independent, disjoint buckets — `.tsx` and `.test.tsx` — each toggling on its
own, with a matching **Select all**. Works on github.com and any GitHub Enterprise install.

## Recording

_Add screen recording here._
