<?php 
  class HtWrpWidgetLoader {
    public function __construct() {
      require_once plugin_dir_path( dirname( __FILE__ ) ) . 'widget/ht-wrp-widget.php';
    }

    public function load() {
      register_widget('Ht_Wrp_Widget');
    }
  }
?>