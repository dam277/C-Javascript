<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Cypress test form</h1>
    </header>
    <main>
        <?php
        for($i = 0; $i < 2;)
        {
            ?>
            <h2>Form <?= ++$i ?> </h2>
            <form action="post.php" method="POST" id="<?="form".$i?>">
                <input type="text" name="username" id="username">
                <input type="password" name="password" id="password">
                <input type="submit" value="Envoyer">
            </form>
            <?php
        }
        ?>
    </main>
    <?php include("../footer.php"); ?> 
</html>



