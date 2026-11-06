# DNS da apresentação

Hostname: **ideal.felipeferreira.dev**.

O DNS público foi conferido em 06/11/2026 e já apresenta:

| Campo | Valor |
|---|---|
| Tipo | CNAME |
| Nome / Host na GoDaddy | `ideal` |
| Valor / Aponta para | `felipe-1507.github.io` |

Esse apontamento atende ao GitHub Pages. Não é necessário mudar os nameservers do domínio principal. Na GoDaddy, o nome é apenas `ideal`, sem o domínio completo, e o valor é um hostname sem `https://` ou caminho.

## Associação no GitHub

1. Abra https://github.com/Felipe-1507/-ideal-papelaria-demo/settings/pages .
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Em **Custom domain**, salve `ideal.felipeferreira.dev`.
4. Execute ou reexecute o workflow de publicação.
5. Aguarde a emissão do certificado e ative **Enforce HTTPS** quando disponível.

Em `.dev`, o navegador exige HTTPS. O endereço só estará pronto para a apresentação depois que o certificado estiver válido.

O arquivo `dist/CNAME` não substitui a configuração do domínio em Settings quando a publicação usa GitHub Actions.

## Verificar

```
Resolve-DnsName ideal.felipeferreira.dev -Type CNAME
curl.exe -I https://ideal.felipeferreira.dev
```

Conferir certificado, resposta bem-sucedida, imagens, filtros e links de WhatsApp. Os registros do domínio raiz, `www` e e-mail não precisam ser alterados para esta demonstração.

## Fontes

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://www.godaddy.com/pt-br/help/adicionar-um-registro-cname-19236
- https://www.registry.google/domains/dev/
