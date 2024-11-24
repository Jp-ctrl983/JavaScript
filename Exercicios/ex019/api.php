<?php
include 'db.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');

$db = conectarBanco();

// Método para adicionar um produto
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dados = json_decode(file_get_contents('php://input'), true);
    if (isset($dados['nome']) && isset($dados['preco'])) {
        $nome = $dados['nome'];
        $preco = $dados['preco'];

        $stmt = $db->prepare("INSERT INTO produtos (nome, preco) VALUES (:nome, :preco)");
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':preco', $preco);
        $stmt->execute();

        echo json_encode(['status' => 'sucesso', 'id' => $db->lastInsertId()]);
    } else {
        http_response_code(400);
        echo json_encode(['erro' => 'Dados inválidos!']);
    }
    exit;
}

// Método para listar produtos
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $db->query("SELECT * FROM produtos");
    $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($produtos);
    exit;
}
?>
