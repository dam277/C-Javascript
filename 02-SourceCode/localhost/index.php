<?php
$baseDirectory = "./";
$paths = array();

// Lister tous les éléments dans le répertoire donné
$elements = scandir($baseDirectory);

// Boucle sur chaque élément
foreach ($elements as $element) 
{
    // Vérifier si c'est un dossier
    if (is_dir($baseDirectory . $element) && $element != "." && $element != "..") 
    {
        $directory = $element;

        foreach(scandir($directory) as $file)
        {
            // Ignore "." and ".."
            if ($file == "." || $file == "..") continue;

            // Get the file extension
            $file_ext = pathinfo($file, PATHINFO_EXTENSION);

            // Check if the file extension is .php, .html or .txt
            if ($file_ext == "php" || $file_ext == "html") 
            {
                // Set new path
                $path = new Path($directory, $file);

                // Check if the file name contains "index"
                if (strpos($file, "index") !== false) 
                {
                    $paths["index"][] = $path;
                }
                else
                {
                    $paths["other"][] = $path;
                }
            }
        }
    }
}

class Path
{
    public string $directory, $file;
    public function __construct(string $directory, string $file)
    {
        $this->directory = $directory;
        $this->file = $file;
    }
}
?>
sadasfafaFYfAF
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
</head>
<body style="text-align: center;">
    <header>
        <h1>Project manager</h1>
    </header>
    <main>
        <?php
        foreach($paths as $key => $pathType)
        {
        ?>
        <h2>List of <?= $key ?> files</h2>
        <?php
            foreach($pathType as $path)
            {
            ?>
                <a href="<?= $path->directory ."/". $path->file ?>">
                    <span>
                        <?= $path->directory ."/". $path->file ?>
                    </span>
                </a>
                <br>
            <?php
            }
        }
        ?>
    </main>
    <footer>

    </footer>
</body>
</html>