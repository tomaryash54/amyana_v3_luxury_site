# AMYANA Layout & Spacing System

## Overview

This document outlines the global layout and spacing system implemented for the AMYANA wellness website. The system provides consistent spacing, reusable components, and clean vertical rhythm throughout the application.

## Core Principles

- **Consistent Section Spacing**: All sections use standardized padding values
- **Reusable Container Classes**: Flexible container system with multiple size variants
- **Clean Vertical Rhythm**: Systematic spacing scale based on a 4px base unit
- **Improved Readability**: Consistent typography and spacing patterns

## Spacing Scale

The system uses a 4px base unit with a comprehensive scale:

```css
--space-1: 0.25rem  /* 4px */
--space-2: 0.5rem   /* 8px */
--space-3: 0.75rem  /* 12px */
--space-4: 1rem     /* 16px */
--space-5: 1.25rem  /* 20px */
--space-6: 1.5rem   /* 24px */
--space-7: 2rem     /* 32px */
--space-8: 2.5rem   /* 40px */
--space-9: 3rem     /* 48px */
--space-10: 4rem    /* 64px */
--space-11: 5rem    /* 80px */
--space-12: 6rem    /* 96px */
```

## Container System

### Base Container
```html
<div class="container">
  <!-- Content -->
</div>
```

### Container Variants
- `.container--xs` - 512px max-width
- `.container--sm` - 768px max-width
- `.container--md` - 1024px max-width
- `.container--lg` - 1280px max-width (default)
- `.container--xl` - 1440px max-width
- `.container--full` - No max-width

### Container Padding Variants
- `.container--pad-xs` - 16px padding
- `.container--pad-sm` - 20px padding
- `.container--pad-md` - 40px padding
- `.container--pad-lg` - 64px padding
- `.container--pad-xl` - 96px padding

## Section System

### Base Section
```html
<section class="section">
  <div class="container">
    <!-- Content -->
  </div>
</section>
```

### Section Spacing Variants
- `.section--xs` - 32px top/bottom padding
- `.section--sm` - 64px top/bottom padding
- `.section--md` - 96px top/bottom padding (default)
- `.section--lg` - 80px top/bottom padding
- `.section--xl` - 96px top/bottom padding

## Spacing Utilities

### Margin Utilities
- `.m-{1-12}` - All margins (e.g., `.m-4` = 16px margin)
- `.mt-{1-12}` - Margin top
- `.mb-{1-12}` - Margin bottom
- `.ml-{1-12}` - Margin left
- `.mr-{1-12}` - Margin right

### Padding Utilities
- `.p-{1-12}` - All padding
- `.pt-{1-12}` - Padding top
- `.pb-{1-12}` - Padding bottom
- `.pl-{1-12}` - Padding left
- `.pr-{1-12}` - Padding right

## Vertical Rhythm

### Flow Utilities
Automatically adds consistent spacing between child elements:

```html
<div class="flow">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div>
```

Variants:
- `.flow--sm` - 12px spacing
- `.flow--md` - 16px spacing (default)
- `.flow--lg` - 24px spacing
- `.flow--xl` - 40px spacing

### Stack Utilities
Similar to flow but with more control:

```html
<div class="stack stack--lg">
  <h2>Title</h2>
  <p>Description</p>
  <button>Action</button>
</div>
```

## Grid System

### Basic Grid
```html
<div class="grid grid--cols-3 grid--gap-md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Grid Variants
- `.grid--cols-{1-5}` - Column count
- `.grid--gap-{xs-xl}` - Gap size
- `.grid--auto-fit` - Auto-fitting columns
- `.grid--auto-fit--{sm-xl}` - Min column width

## Flex Utilities

### Flex Container
```html
<div class="flex flex--justify-center flex--items-center flex--gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Flex Properties
- Direction: `.flex--row`, `.flex--col`, etc.
- Justify: `.flex--justify-{start,center,end,between,around,evenly}`
- Align: `.flex--items-{start,center,end,baseline,stretch}`
- Gap: `.flex--gap-{1-8}`

## Responsive Design

The system includes responsive breakpoints:

- **Mobile**: < 768px - Reduced spacing and single columns
- **Tablet**: 768px - 1024px - Medium adjustments
- **Desktop**: > 1024px - Full spacing and multi-column layouts

## Implementation Examples

### Before (Old System)
```html
<div class="container" style="padding: 40px 20px;">
  <h2 style="margin-bottom: 60px;">Title</h2>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;">
    <!-- Content -->
  </div>
</div>
```

### After (New System)
```html
<section class="section">
  <div class="container">
    <h2>Offerings</h2>
    <div class="grid grid--cols-3 grid--gap-lg mt-10">
      <!-- Content -->
    </div>
  </div>
</section>
```

## Migration Guide

1. **Replace inline styles** with utility classes
2. **Use semantic section elements** with `.section` class
3. **Apply container classes** consistently
4. **Leverage spacing utilities** instead of custom margins/padding
5. **Use grid/flex utilities** for layouts

## Benefits

- **Consistency**: Standardized spacing across all components
- **Maintainability**: Easy to update spacing globally via CSS variables
- **Performance**: Reduced CSS bundle size through utility classes
- **Developer Experience**: Intuitive class names and predictable behavior
- **Accessibility**: Better vertical rhythm improves readability

## File Structure

- `src/layout.css` - Core layout and spacing system
- `src/index.css` - Typography and component styles
- `src/main.jsx` - CSS imports

The system is fully responsive and maintains visual consistency across all device sizes.