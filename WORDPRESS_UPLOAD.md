## WordPress upload options (recommended)

This repo contains a static page at `services.html` with its custom styles in `assets/css/services.css`.

### Option A (simplest): paste into a WordPress Page

- **Create a new Page** in WordPress: `Pages → Add New` (title: “Services”).
- **Add a “Custom HTML” block** and paste the HTML **inside `<body>`** from `services.html` (everything between `<body id="page-top">` and `</body>`).
- **Add the CSS** from `assets/css/services.css` into: `Appearance → Customize → Additional CSS`.
- **Ensure Bootstrap + jQuery are available**:
  - If your theme already includes Bootstrap, you’re done.
  - If not, ask your developer (or use your theme’s child theme) to enqueue Bootstrap and your `services.css` (see Option B snippet).

Notes:
- The “Contact” form in `services.html` is visual-only. In WordPress, replace it with a form plugin shortcode (e.g. Contact Form 7 / WPForms).

### Option B (best for long-term): create a page template in your theme

In your (child) theme, create a file named `page-services.php` and paste a template like this:

```php
<?php
/**
 * Template Name: Services
 */
get_header();
?>

<link rel="stylesheet" href="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/css/services.css">

<!-- Paste the body markup from services.html here (inside your theme layout) -->

<?php get_footer(); ?>
```

Then:
- Copy `assets/css/services.css` into your child theme at `assets/css/services.css`.
- Create a new WordPress Page and set **Template: Services** in the page settings.

### Important

- This page is **inspired by a modern “services landing page” layout** (hero, cards, plans, FAQ). Don’t copy Lenovo text/images/branding 1:1—use your own.

