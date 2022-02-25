// If this route should accept just GET requests

function getAlunos(req, res) {
    if (req.method === 'GET')
        return res.status(200).json([{ id: 1, nome: 'Rafael', idade: 25, telefone: '22222-2222', email: 'r@gmail.com' }])
    return res.status(400)
}

export default getAlunos;