# Hospedagem da demonstração

Endereço: **https://ideal.felipeferreira.dev**.

## DNS verificado em06/11/2026

| Campo na GoDaddy | Valor |
|---|---|
| Tipo | CNAME |
| Nome / Host | `ideal` |
| Valor | `felipe-1507.github.io` |

O DNS permanece na GoDaddy. Não é necessário alterar os nameservers, o domínio raiz ou os registros de e-mail.

## GitHub Pages

Repositório: https://github.com/Felipe-1507/-ideal-papelaria-demo

Configuração de publicação:

- **Source:** Deploy from a branch
- **Branch:** main
- **Pasta:** / (root)
- **Custom domain:** ideal.felipeferreira.dev
- **HTTPS:** usar o certificado válido emitido pelo GitHub; manter Enforce HTTPS ativado quando disponível.

O arquivo `CNAME` fica na raiz da branch publicada. O `index.html`, os estilos, JavaScript e assets também ficam na raiz, alinhados à configuração ativa do Pages. O workflow `check.yml` valida os arquivos, sem fazer outro deploy.

## Conferência

```
Resolve-DnsName ideal.felipeferreira.dev -Type CNAME
curl.exe -I https://ideal.felipeferreira.dev
```

Em `.dev`, o navegador exige HTTPS. Conferir o certificado e a resposta do site antes de apresentar.

Fontes técnicas:

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://www.godaddy.com/pt-br/help/adicionar-um-registro-cname-19236
- https://www.registry.google/domains/dev/
