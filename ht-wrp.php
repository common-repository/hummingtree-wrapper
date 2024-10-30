<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://hummingtree.co
 * @since             1.0
 * @package           Ht_Wrp
 *
 * @wordpress-plugin
 * Plugin Name:       HummingTree Wrapper
 * Plugin URI:        https://hummingtree.co
 * Description:       A plugin for including the HummingTree ad wrapper on your Wordpress site.
 * Version:           1.1.2
 * Author:            HummingTree
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ht-wrp
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'htwrp_version', '1.1.2' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-ht-wrp-activator.php
 */
function activate_ht_wrp() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-ht-wrp-activator.php';
	Ht_Wrp_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-ht-wrp-deactivator.php
 */
function deactivate_ht_wrp() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-ht-wrp-deactivator.php';
	Ht_Wrp_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_ht_wrp' );
register_deactivation_hook( __FILE__, 'deactivate_ht_wrp' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-ht-wrp.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_ht_wrp() {

	$plugin = new Ht_Wrp();
	$plugin->run();

}
run_ht_wrp();
