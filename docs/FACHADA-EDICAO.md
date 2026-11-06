# Registro do tratamento da fachada

- Data: 06/11/2026.
- Entrada: segunda das três capturas de tela do Google Maps/Street View enviadas por Felipe, em vista frontal aproximada. A terceira foi referência de contexto.
- Ferramenta: editor integrado `image_gen`, modo de edição de imagem. Não foi utilizado o CLI.
- Destino: `assets/fachada-aberta-ideal.webp`, 1448 × 1086, 243.108 bytes.
- A saída PNG foi copiada para `ideal-papelaria-research/fachada-aberta-tratada.png`, fora do pacote público. A conversão para WebP manteve as dimensões e o enquadramento.
- Aplicação: seção “Tem história. Tem cuidado. Tem Ideal.”, com crédito ao Google Street View e indicação de imagem tratada. O resultado é uma edição com IA baseada na captura, não uma fotografia documental nova.

## Prompt final

```text
Use case: precise-object-edit.
Asset type: storefront photograph for the Ideal Papelaria website.
Input images: Of the two latest attached screenshots, the FIRST (close frontal landscape view with the large IDEAL PAPELARIA sign) is the EDIT TARGET. The SECOND, wider street view, is reference only for the same real building.
Edit the target photograph conservatively. Remove the navigation/interface overlays: black address panel, share button, mini-map, navigation arrows and the red place pin and floating place label. Preserve the Google copyright/source attribution marks; do not disguise the provenance.
Crop/straighten to a natural landscape 4:3 composition that shows the entire red IDEAL PAPELARIA sign, the blue/red ground floor, shop window, and OPEN entrance down to the pavement. Reduce unnecessary upper-floor space and neighboring buildings, without cropping the store's side edges or sign letters. Adjust exposure/shadows gently so the real entrance and merchandise are easier to see. Keep a realistic overcast daylight appearance.
Invariants: exact real storefront architecture, proportions, original red and blue paint, awning, doors, window, visible merchandise, reflections and lettering "IDEAL PAPELARIA" remain faithful to the target photograph. Do not invent new products, customers, signage, renovated surfaces or a different building. Preserve photographic detail and modest imperfections. No artistic redesign, no new marketing text.
```

