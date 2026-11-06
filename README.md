# Ideal Papelaria — demonstração

**Site:** https://ideal.felipeferreira.dev

Landing page em HTML, CSS e JavaScript, com identidade e fotografias reais da Ideal Papelaria de Itapetininga.

## Publicação

O GitHub Pages publica diretamente a **branch `main`, pasta `/` (raiz)**. Cada alteração nessa branch atualiza a demonstração. O arquivo `.nojekyll` mantém os arquivos estáticos sem transformação de Jekyll.

O domínio `ideal.felipeferreira.dev` está associado pelo arquivo `CNAME` e pelas configurações do Pages. O DNS público aponta para `felipe-1507.github.io`. O HTTPS foi verificado em06/11/2026.

Não há workflow de publicação paralelo. `.github/workflows/check.yml` apenas verifica os arquivos; o deploy fica a cargo da publicação nativa do Pages. Manter **Settings → Pages → Source: Deploy from a branch → main → / (root)** para este formato.

## Arquivos

```
index.html                  Página e contatos
style.css                   Estilos e layout responsivo
app.js                      Vitrine e lista de orçamento
assets/                     Fotografias e fontes locais
CNAME                       ideal.felipeferreira.dev
.nojekyll                   Publicação estática
scripts/check.mjs           Verificação dos arquivos
scripts/serve.mjs           Servidor local
docs/                       Pesquisa, DNS e roteiro comercial
```

Não há instalação de dependências nem compilação. `npm run check` verifica arquivos e JavaScript; `npm run dev` abre http://127.0.0.1:4174.

## Funcionalidade

O cliente filtra categorias, seleciona itens, escreve sua lista e abre uma mensagem no WhatsApp de atendimento `5515998555587`. Ele revisa e envia a mensagem no próprio WhatsApp. A lista fica salva apenas no navegador.

Os produtos são exemplos divulgados pela empresa, com disponibilidade a confirmar. Não há preços, estoque, prazo de entrega, checkout, backend ou analytics simulados.

A página é um conceito para apresentação e mantém `noindex` no HTML. O `robots.txt` permite leitura para que os mecanismos de busca encontrem essa instrução. Isso não é controle de acesso por senha. O arquivo `_headers` é usado apenas na alternativa Cloudflare, pois o GitHub Pages não aplica essas diretivas.

## Documentação

- [DNS e hospedagem](docs/DNS-GODADDY.md)
- [Fontes e fotos](docs/FONTES.md)
- [Roteiro comercial](docs/ROTEIRO-COMERCIAL.md)

Na entrega definitiva, revisar conteúdo com a empresa, atualizar domínio e metadados, retirar a identificação de demonstração e configurar indexação conforme combinado.

## Alternativa Cloudflare Pages

O `wrangler.jsonc` foi mantido como opção de migração. O diretório estático agora é a raiz do projeto. Antes de trocar de hospedagem, associar o domínio no novo provedor e atualizar o CNAME ao hostname efetivamente criado; o DNS atual pertence à publicação do GitHub Pages.
