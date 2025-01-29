# Tailwind CSS Number Input Spinner Bug

This repository demonstrates a rare issue where the number input spinner persists even after applying Tailwind CSS and attempting to override default styles.  The problem arises from the interplay between Tailwind's `@apply` directives, browser-specific styles, and custom CSS overrides.

## Problem

Despite attempting to hide the number input spinner using Tailwind directives and custom CSS, the spinner stubbornly remains visible in some browsers (particularly webkit-based ones).

## Solution

The solution involves a more robust approach to styling number inputs that accounts for browser-specific inconsistencies. The provided solution ensures that spinners are effectively removed in various browsers, while still allowing for use of Tailwind's styling utilities.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies (if any).
3. Run your preferred development server to view the bug and solution.