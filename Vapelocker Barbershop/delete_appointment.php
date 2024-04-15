<?php
include('db.php');

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM appointments WHERE id=$id";
    $result = $conn->query($sql);

    if ($result) {
        header('Location: admin.php');
        exit;
    } else {
        echo "Error deleting record.";
    }
}
?>
