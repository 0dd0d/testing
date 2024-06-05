


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    if ($name && $email && $comment) {
        $timestamp = time(); // get the current timestamp
        $content = $name . " (" . $email . "): " . $comment . " (Submitted at " . $timestamp . ")" . PHP_EOL; // add the timestamp to the comment content
        $file = fopen("comments.txt", "a"); // open the file in append mode
        fwrite($file, $content); // write the comment content to the file
        fclose($file); // close the file
        echo "Comment saved successfully.";
      } else {
        echo "Comment field cannot be empty.";
      }
}
?>



<!-- if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $comment = $_POST['comment'];
  if (!empty($comment)) {
    $file = fopen("comments.txt","a");
    fwrite($file, $comment . "\n");
    fclose($file);
    echo "Comment saved successfully.";
  } else {
    echo "Comment field cannot be empty.";
  }
} -->
