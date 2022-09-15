<!-- Auteur  : Corentin Robin
     Version : 12 mars 2018 -->

<?php
    $page_name = ($_GET["page"] == "" ? "home" : $_GET["page"]);
?>

<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Corentin's tools</title>
        
        <script src="/scripts/index.js"></script>
        <script src="/scripts/extension.js"></script>
        <script src="/scripts/<?= $page_name ?>.js"></script>

        <link rel="stylesheet" type="text/css" href="/styles/global.css">
        <link rel="stylesheet" type="text/css" href="/styles/<?= $page_name ?>.css">
	</head>

<body>

<!-- En-tête -->

<header>
    <a href="/">
        <img src="/images/tools_icon.svg">
        Corentin's tools
    </a>

    <span onclick="Index.toggle_menu()">
        <img src="/images/menu_icon.svg">
    </span>
</header>

<!-- Corps -->

<main class="<?= $page_name ?>">
    <?php
        include "./pages/variables.php";
        include "./pages/" . $page_name . ".php";
    ?>
</main>

<!-- Pied de page -->

<footer>
    &copy; 2018 Corentin Robin
</footer>

<!-- Menu -->

<nav>
    <?php
    for($i = 0; $i < count($APPLICATIONS); $i++)
    {
        $application = $APPLICATIONS[$i];
        echo "<a href='" . $application["path"] . "' title='" . $application["text"] . "'><img src='/images/" . $application["category"] . "_icon.svg'>" . $application["title"] . "</a>";
    }
    ?>
</nav>

<!-- Boîte de dialogue -->

<div class="overlay"></div>
<div class="dialog">
    <div>Default text.</div>
    <span class="button" onclick="Dialog.hide()">Close</span>
</div>

</body>
</html>