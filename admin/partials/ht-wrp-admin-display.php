<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://hummingtree.co
 * @since      1.0.0
 *
 * @package    Ht_Wrp
 * @subpackage Ht_Wrp/admin/partials
 */
?>

<div class="wrap">

    <h2><?php echo esc_html(get_admin_page_title()); ?></h2>

    <form method="post" name="hummingtree_options" action="options.php">
        <?php
            $options = get_option($this->plugin_name);

            $host_id = $options['host_id'];

            settings_fields($this->plugin_name); 
            do_settings_sections($this->plugin_name);
        ?>
        <fieldset>
            <fieldset>
                <p>Enter your HummingTree host ID. Don't have one? Get it <a href="https://hummingtree.co/displayads" target="_blank">here</a>.</p>
                <legend class="screen-reader-text"><span><?php _e('Enter your HummingTree host ID', $this->plugin_name); ?></span></legend>
                <input type="text" class="regular-text" id="<?php echo $this->plugin_name; ?>-host_id" name="<?php echo $this->plugin_name; ?>[host_id]" value="<?php if(!empty($host_id)) echo $host_id; ?>"/>
                <p>Questions, concerns or suggestions? Please email us at <a href="mailto:support@hummingtree.co" target="_blank">support@hummingtree.co</a>.</p>
            </fieldset>
        </fieldset>

        <?php submit_button('Save changes', 'primary','submit', TRUE); ?>

    </form>

</div>
