<?php 

class Ht_Wrp_Widget extends WP_Widget {
  public $instance;
	public function __construct() {
		$widget_options = array(
			'classname' => 'Ht_Wrp_Widget',
      'description' => 'The HummingTree Wrapper widget.'
		);
		parent::__construct('Ht_Wrp_Widget', 'HummingTree Wrapper', $widget_options);
  }
  
  public function widget( $args, $instance ) {
    $error = '';
    $host_id = get_option('ht-wrp')['host_id'];

    if (! $this->instance ) {
      $this->instance = $this->id;
    }
    if ($this->instance !== $this->id ){
      $error = '<p>Please only use one HummingTree widget at at time.</p>';
    }
    if ( is_active_widget(false, false, $this->id_base, true) && strlen($error) === 0 ) {
      // wp_enqueue_style('ht-wrp-widget-style-reset', plugin_dir_url(__FILE__) . './public/css/ht-wrp-reset.css');
      wp_enqueue_style('ht-wrp-widget-style', plugin_dir_url(__FILE__) . './public/css/ht-wrp-public.css');
      wp_enqueue_script('ht-wrp-widget-script', plugin_dir_url(__FILE__) . './public/js/ht-wrp-public.js');
      wp_localize_script('ht-wrp-widget-script', 'ht_wrp_host_data', array('hostId' => $host_id, 'pluginUrl' => plugins_url()));
    }

    echo $args['before_widget'];

    echo strlen($error) === 0 ? '<div id="hummingtree-wrap" class="cleanslate ht-parent">
      <div id="hummingtree">
        <div class="hummingtree-message">
          <h1 class="hummingtree-message-header"></h1>
          <p class="hummingtree-message-text"></p>
          <img class="hummingtree-message-logo hummingtree-logo-loading" src="' . plugins_url( 'public/assets/ht-tree.svg', __FILE__ ) . '" />
          <div class="hummingtree-message-shadow hummingtree-shadow-loading"></div>
          <img class="hummingtree-message-title hummingtree-title-loading" src="' . plugins_url( 'public/assets/ht-text.svg', __FILE__ ) . '"/>
          <a class="hummingtree-message-button"  href="' . admin_url('options-general.php?page=ht-wrp') . '"></a>
        </div>
        <div class="hummingtree-slider hummingtree-slider-inactive">
          <div class="hummingtree-slider-head">
            <a class="hummingtree-toggle">
              <img class="hummingtree-caret hummingtree-caret-open" />
            </a>
          </div>
          <div class="hummingtree-slider-body">
          </div>
          <div class="hummingtree-slider-footer">
            <a class="hummingtree-footer-button" target="_blank">
            </a>
            <a class="hummingtree-footer-link" href="https://hummingtree.co" target="_blank">
              <img class="hummingtree-footer-logo" src="' . plugins_url( 'public/assets/ht-tree-white.svg', __FILE__ ) . '"/>
            </a>
          </div>
        </div>
      </div>
    </div>' : $error;

    echo $args['after_widget'];
  }
}

?>
