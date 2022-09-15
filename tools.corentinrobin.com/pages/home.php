<?php
for($i = 0; $i < count($APPLICATIONS); $i++)
{
    $application = $APPLICATIONS[$i];
    echo "<div onclick='window.location = \"/" . $application["path"] . "\";'><span>" . $application["title"] . "</span><p>" . $application["text"] . "</p></div>";
}
?>