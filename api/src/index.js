import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async (req, resp) => {
  try {

      let produtos = await db.tb_produto.findAll({order: [['id_produto', 'desc']] });
      resp.send(produtos);

  } catch (e) {
      resp.send({ erro: e.toString()})
  }
})


app.post ('/produto', async (req, resp) => {
    try {
      let {nome, categoria, preco_de, preco_por, avaliacao, descricao, estoque, image} = req.body;
      let { id } = req.params;



      if(isNaN(avaliacao) || avaliacao < 0 || avaliacao > 10) {
          return resp.send({erro: 'Valor Avaliação inválido'});
      }

      if(isNaN(preco_de) || preco_de < 0) {
          return resp.send({erro: 'Valor Preço DE inválido'});
      }

      if(isNaN(preco_por) || preco_por < 0) {
          return resp.send({erro: 'Valor Preço POR inválido'});
      }

      if(isNaN(estoque) || estoque < 0) {
          return resp.send({erro: 'Valor Estoque inválido'});
      }

      if(nome == '') {
          return resp.send({erro: 'Campo Nome é obrigatório'});
      }

      if(categoria == '') {
          return resp.send({erro: 'Campo Categoria é obrigatório'});
      }

      if(preco_de == '') {
          return resp.send({erro: 'Campo Preço DE é obrigatório'});
      }

      if(preco_por == '') {
          return resp.send({erro: 'Campo Preço POR é obrigatório'});
      }

      if(avaliacao == '') {
          return resp.send({erro: 'Campo Avaliação é obrigatório'});
      }

      if(descricao == '') {
          return resp.send({erro: 'Campo Descrição é obrigatório'});
      }

      if(estoque == '') {
          return resp.send({erro: 'Campo Estoque é obrigatório'});
      }

      if(image == '') {
          return resp.send({erro: 'Campo Link Imagem é obrigatório'});
      }

      if(nome.length < 3)
          return resp.send({erro: "Não é possivel inserir um nome com menos de 3 caracteres"});

      if(categoria.length < 3)
          return resp.send({erro: "Não é possivel inserir uma categoria com menos de 3 caracteres"});

      if(descricao.length < 3)
          return resp.send({erro: "Não é possivel inserir uma descrição com menos de 3 caracteres"});
      
      let exist = await db.tb_produto.findOne({where: {nm_produto: req.body.nome}});
      if(exist != null) {
          return resp.send({erro: 'Produto ja existe!'});
      }



      let r = await db.tb_produto.create({
          nm_produto: nome,
          ds_categoria: categoria,
          vl_preco_de: preco_de,
          vl_preco_por: preco_por,
          vl_avaliacao: avaliacao,
          ds_produto: descricao,
          qtd_stoque: estoque,
          img_produto: image,
          bt_ativo: ativo,
          dt_inclusao: inclusao

      })
      resp.send(r);

  } catch (e) {
      resp.send('Ocorreu um erro')
  }
})

app.put ('/produto/:id', async (req, resp) => {
    try {
      
        let {nome, categoria, preco_de, preco_por, avaliacao, descricao, estoque, image} = req.body;
        let { id } = req.params;

        if(isNaN(avaliacao) || avaliacao < 0 || avaliacao > 10) {
            return resp.send({erro: 'Valor Avaliação inválido'});
        }

        if(isNaN(preco_de) || preco_de < 0) {
            return resp.send({erro: 'Valor Preço DE inválido'});
        }

        if(isNaN(preco_por) || preco_por < 0) {
            return resp.send({erro: 'Valor Preço POR inválido'});
        }

        if(isNaN(estoque) || estoque < 0) {
            return resp.send({erro: 'Valor Estoque inválido'});
        }

        if(nome == '') {
            return resp.send({erro: 'Campo Nome é obrigatório'});
        }

        if(categoria == '') {
            return resp.send({erro: 'Campo Categoria é obrigatório'});
        }

        if(preco_de == '') {
            return resp.send({erro: 'Campo Preço DE é obrigatório'});
        }

        if(preco_por == '') {
            return resp.send({erro: 'Campo Preço POR é obrigatório'});
        }

        if(avaliacao == '') {
            return resp.send({erro: 'Campo Avaliação é obrigatório'});
        }

        if(descricao == '') {
            return resp.send({erro: 'Campo Descrição é obrigatório'});
        }

        if(estoque == '') {
            return resp.send({erro: 'Campo Estoque é obrigatório'});
        }

        if(image == '') {
            return resp.send({erro: 'Campo Link Imagem é obrigatório'});
        }

        if(nome.length < 3)
            return resp.send({erro: "Não é possivel inserir um nome com menos de 3 caracteres"});

        if(categoria.length < 3)
            return resp.send({erro: "Não é possivel inserir uma categoria com menos de 3 caracteres"});

        if(descricao.length < 3)
            return resp.send({erro: "Não é possivel inserir uma descrição com menos de 3 caracteres"});
        
        let exist = await db.tb_produto.findOne({where: {nm_produto: req.body.nome}});
        if(exist != null) {
            return resp.send({erro: 'Produto ja existe!'});
        }


        let r = await db.tb_produto.update(
            {
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: preco_de,
                vl_preco_por: preco_por,
                vl_avaliacao: avaliacao,
                ds_produto: descricao,
                qtd_stoque: estoque,
                img_produto: image,
                bt_ativo: true,
                dt_inclusao: new Date()
            },

            {
               where: {id_produto: id}
            }
        )
        resp.sendStatus(200);

  } catch (e) {
      resp.send({ erro: e.toString()})
  }
})

app.delete ('/produto/:id', async (req, resp) => {
    try {
        let { id } = req.params;

        let r = await db.tb_produto.destroy({where: {id_produto: id} })
        resp.sendStatus(200);


  } catch (e) {
      resp.send({ erro: e.toString()})
  }
})







app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))