# Ideal Papelaria — demonstração

Landing page estática em HTML, CSS e JavaScript, com fotos reais da Ideal Papelaria de Itapetininga.

**Endereço configurado nos arquivos:** https://ideal.felipeferreira.dev

**Repositório:** https://github.com/Felipe-1507/-ideal-papelaria-demo

A publicação usa GitHub Pages com GitHub Actions. O DNS público já foi conferido apontando `ideal.felipeferreira.dev` para `felipe-1507.github.io`. O domínio só ficará ativo depois de habilitar Pages, associar o hostname nas configurações e concluir a emissão do certificado HTTPS.

## Ativar a primeira publicação

1. Abra https://github.com/Felipe-1507/-ideal-papelaria-demo/settings/pages .
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Em **Custom domain**, salve `ideal.felipeferreira.dev`.
4. Na aba Actions, execute ou reexecute **Publicar demonstração no GitHub Pages**. Após a configuração inicial, cada alteração na branch `main` publica o site automaticamente.
5. Aguarde a validação do DNS e a disponibilidade do certificado. Ative **Enforce HTTPS** quando disponível e confira o endereço antes de enviar ao cliente.

O arquivo `dist/CNAME` registra o hostname pretendido, mas o GitHub ignora esse arquivo para configurar o domínio quando a publicação usa Actions. O cadastro em **Settings → Pages → Custom domain** continua necessário.

## Estrutura

```
dist/                       Arquivos publicados
  index.html
  style.css
  app.js
  assets/
  CNAME
  robots.txt
scripts/
  check.mjs                 Verifica arquivos e JavaScript
  serve.mjs                 Servidor local
.github/workflows/
  check.yml                 Verificação de mudanças
  pages.yml                 Publicação no GitHub Pages
docs/                       Pesquisa e orientações comerciais
wrangler.jsonc              Alternativa de publicação no Cloudflare Pages
```

Não há instalação de dependências nem compilação. `npm run check` verifica arquivos e JavaScript; `npm run dev` abre http://127.0.0.1:4174.

O campo `path: dist` do workflow garante que somente os arquivos do site sejam publicados, não os roteiros e documentos do repositório.

## Demonstração e conteúdo

O site é uma demonstração pública para apresentação à empresa. Tem `noindex` no HTML e identifica o conceito no rodapé. O `robots.txt` permite leitura para que os mecanismos de busca encontrem a instrução. Isso não representa controle de acesso por senha.

A vitrine apresenta categorias e exemplos de produtos divulgados pela empresa. O cliente seleciona itens, escreve sua lista e abre uma mensagem no WhatsApp oficial `551532732891`. A mensagem só é enviada quando o cliente confirmar no WhatsApp. A lista fica salva apenas no navegador.

Não há preços, estoque ou prazo de entrega simulados. Não há checkout, backend ou analytics implementado. O arquivo `_headers` é usado na alternativa Cloudflare; o GitHub Pages não aplica essas diretivas. O `noindex` do HTML continua presente em ambos.

## Documentos

- [DNS da GoDaddy](docs/DNS-GODADDY.md)
- [Fontes e fotografias](docs/FONTES.md)
- [Roteiro comercial](docs/ROTEIRO-COMERCIAL.md)

## Fontes técnicas

- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

O `wrangler.jsonc` foi mantido como alternativa para Cloudflare Pages. Nessa alternativa, associar o domínio no Cloudflare e apontar o CNAME ao hostname `*.pages.dev` realmente provisionado. Não habilitar os dois provedores para o mesmo hostname simultaneamente.
