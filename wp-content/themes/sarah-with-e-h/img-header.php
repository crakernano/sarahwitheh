<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<style>

.more{
    background-color: #2b2b2b;
    min-width: 300px;
    color: #FFF;
    padding: 100px;
}

.titulo {
  position: absolute;
  color: #FFF;
  font-size: 5rem;
  bottom: 350px;
  left: 50px;
}

.subtitulo {
  position: absolute;
  color: #FFF;
  font-size: 4rem;
  bottom: 275px;
  left: 50px;
}

.intro-text{
  position: absolute;
  color: #FFF;
  font-size: 1rem;
  bottom: 150px;
  left: 50px;
  width: 40%;
}

.moreImage{
    border-radius: 2%;
    height: 500px ;
    box-shadow: 10px 10px #c40001;

}.transformed{
    -webkit-transform: rotate(50deg);
    -moz-transform: rotate(50deg);
    -o-transform: rotate(50deg);
    -ms-transform: rotate(50deg);
    transform: rotate(50deg);
}


.sarahSubTitle{
    margin-bottom:4rem;
    color: white;
  text-shadow: 2px 2px 4px #000000;
}

.card-body{
    background-color: #2b2b2b;
}
h5.card-header{
 
    background-color: #2b2b2b;
}

.card{
     background-color: #2b2b2b;
     border: none;
}
}
</style>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<?php wp_head(); ?>
</head>

<?php
	$navbar_scheme   = get_theme_mod( 'navbar_scheme', 'navbar-light bg-light' ); // Get custom meta-value.
	$navbar_position = get_theme_mod( 'navbar_position', 'static' ); // Get custom meta-value.

	$search_enabled  = get_theme_mod( 'search_enabled', '1' ); // Get custom meta-value.
?>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="wrapper">
<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between" id="header">
  <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cabecera.png" alt="Snow" style="width:100%;">
  <div class="titulo">Lorem Ipsum</div>
  <div class="subtitulo">Lorem Ipsum sit amet</div>
  <div class="intro-text">Lorem ipsum dolor sit amet. Qui labore similique eum ipsam sed sunt galisum ea
    recusandae quasi ut recusandae cupiditate aut rerum nostrum qui iste eveniet.
    Qui natus odio eum alias enim ab voluptatem quaerat ut voluptatem quam.</div>          
</header>
<div class="more">
<div class="row align-items-start">
    <div class="col">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/paceholder.png" class="moreImage">

    </div>
    <div class="col">
    <h2>A bit more about me</h3>
    <p>Lorem ipsum dolor sit amet. Et molestias nesciunt eos rerum dolorum 33 reiciendis

    iure sed laudantium porro ex cumque totam non sequi blanditiis. Sed aperiam quas

    reiciendis ipsam At rerum facilis qui necessitatibus enim ea recusandae ratione.

    Eum mollitia placeat est quae earum ea laboriosam placeat sit alias debitis ut

    reiciendis consequatur sit nisi odit. Eos odit optio in adipisci quidem quis sequi.

    Sed assumenda aperiam. </p>


    <p>Ut nihil odit in deleniti facere aut quia adipisci At consequatur veritatis ut ducimus
        nisi sit quia dolorem et error sint. Qui odit deserunt quo unde dolorum et alias
        nostrum ut sunt cupiditate. Et nihil laboriosam ut eveniet voluptas et doloremque
        delectus eos enim iure qui inventore omnis et blanditiis consequuntur.
        </p>
    </div>
</div> 

<div class="flex-wrap align-items-center" style="margin-top:4rem;">
    <h2 class ="sarahSubTitle">Services</h2>
    <div class="row">
        <div class="col-sm-3">

            <div class="card">
                <h5 class="card-header"></h5>
                <div class="card-body">
                    <h5 class="card-title">Graphic Design</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet. Et molestias Lorem ipsum dolor sit amet. Et molestias Lorem ipsum dolor sit amet. Et molestias</p>

                </div>
            </div>
        </div>
    </div>

</div>


<!--<main id="main" class="container"<?php if ( isset( $navbar_position ) && 'fixed_top' === $navbar_position ) : echo ' style="padding-top: 100px;"'; elseif ( isset( $navbar_position ) && 'fixed_bottom' === $navbar_position ) : echo ' style="padding-bottom: 100px;"'; endif; ?>>-->
<main id="main" class="container">
