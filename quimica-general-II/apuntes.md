# 📚 Química General 2 - Explicación Completa Desde Cero

---

# ⚖️ EQUILIBRIO REDOX (Reducción-Oxidación)

## ¿Qué es una reacción redox?

Imagina que tienes dos amigos: uno tiene muchas galletas (electrones) y el otro no tiene ninguna. Si el primero le da galletas al segundo, eso es básicamente una reacción redox: **transferencia de electrones**.

### Conceptos Básicos:

**OXIDACIÓN:** Perder electrones (piensa: "oxida-PIERDE")
```
Ejemplo: Fe → Fe²⁺ + 2e⁻
El hierro PERDIÓ 2 electrones
```

**REDUCCIÓN:** Ganar electrones (piensa: "reduce su carga")
```
Ejemplo: Cu²⁺ + 2e⁻ → Cu
El cobre GANÓ 2 electrones
```

**Regla de oro:** Si algo se oxida, algo más DEBE reducirse (los electrones no desaparecen)

---

## Estados de Oxidación

**¿Qué es?** Un número que nos dice cuántos electrones "perdió" o "ganó" un átomo.

### Reglas para asignar números de oxidación:

1. **Elemento puro** (O₂, H₂, Fe) → **0**
2. **Iones simples** (Na⁺, Cl⁻) → **su carga**
3. **Oxígeno** en compuestos → **-2** (excepto en peróxidos: -1)
4. **Hidrógeno** → **+1** (excepto en hidruros metálicos: -1)
5. **Suma de todos** → **carga total de la molécula**

### Ejemplo práctico:

**H₂SO₄** (ácido sulfúrico)
```
H: +1 (x2) = +2
S: ? 
O: -2 (x4) = -8

Total debe ser 0 (molécula neutra):
+2 + S + (-8) = 0
S = +6
```

---

## Agentes Oxidantes y Reductores

**AGENTE OXIDANTE:**
- Es el "ladrón de electrones"
- Él se REDUCE (gana electrones)
- Tiene MAYOR número de oxidación al inicio
- Ejemplo: O₂, Cl₂, KMnO₄

**AGENTE REDUCTOR:**
- Es el "donante de electrones"
- Él se OXIDA (pierde electrones)
- Tiene MENOR número de oxidación al inicio
- Ejemplo: H₂, Zn, Fe

**Truco para recordar:** 
```
"El agente oxidante SE reduce (es medio irónico)"
"El agente reductor SE oxida"
```

---

## ¿Cómo Balancear una Ecuación Redox?

### Método de las Semirreacciones (Paso a Paso)

**Ejemplo:** Balancear la reacción de permanganato con hierro en medio ácido

```
MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺
```

#### PASO 1: Identificar quién se oxida y quién se reduce

```
Mn en MnO₄⁻: +7 → Mn²⁺: +2  (se REDUCE, gana 5e⁻)
Fe²⁺: +2 → Fe³⁺: +3  (se OXIDA, pierde 1e⁻)
```

**Agente oxidante:** MnO₄⁻ (el que se reduce)
**Agente reductor:** Fe²⁺ (el que se oxida)

#### PASO 2: Escribir las semirreacciones

**Reducción:**
```
MnO₄⁻ → Mn²⁺
```

**Oxidación:**
```
Fe²⁺ → Fe³⁺
```

#### PASO 3: Balancear cada semirreacción

**Para la REDUCCIÓN:**

3a. Balancear átomos (excepto O e H):
```
MnO₄⁻ → Mn²⁺  ✓ (ya está balanceado el Mn)
```

3b. Balancear oxígenos con H₂O:
```
MnO₄⁻ → Mn²⁺ + 4H₂O
(había 4 oxígenos en MnO₄⁻, así que agregamos 4 H₂O)
```

3c. Balancear hidrógenos con H⁺ (medio ácido):
```
MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O
(necesitamos 8 H⁺ para los 8 hidrógenos de 4H₂O)
```

3d. Balancear cargas con electrones:
```
Izquierda: -1 + 8(+1) = +7
Derecha: +2

MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O
(agregamos 5e⁻ para igualar cargas)
```

**Para la OXIDACIÓN:**

```
Fe²⁺ → Fe³⁺ + 1e⁻
(simple, solo pierde 1 electrón)
```

#### PASO 4: Igualar los electrones

La reducción tiene 5e⁻ y la oxidación tiene 1e⁻.
Necesitamos multiplicar la oxidación por 5:

```
Reducción: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O  (x1)
Oxidación: Fe²⁺ → Fe³⁺ + 1e⁻  (x5)
```

Queda:
```
MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O
5Fe²⁺ → 5Fe³⁺ + 5e⁻
```

#### PASO 5: Sumar y cancelar electrones

```
MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O
```

¡Listo! Ecuación balanceada ✓

---

### ¿Y si es medio BÁSICO (OH⁻)?

**Pasos adicionales:**

Si tienes H⁺ en la ecuación balanceada en medio ácido:

1. Agregar OH⁻ a ambos lados (igual cantidad que H⁺)
2. Combinar H⁺ + OH⁻ = H₂O
3. Cancelar H₂O duplicadas

**Ejemplo:**
```
Si tengo: ... + 8H⁺ → ...

Agrego 8OH⁻ a ambos lados:
... + 8H⁺ + 8OH⁻ → ... + 8OH⁻

Simplifico (8H⁺ + 8OH⁻ = 8H₂O):
... + 8H₂O → ... + 8OH⁻
```

---

## Resumen Visual del Proceso:

```
┌─────────────────────────────────────┐
│  OXIDACIÓN (pierde e⁻)              │
│  ↓ número de oxidación              │
│  Es el AGENTE REDUCTOR              │
└─────────────────────────────────────┘
              │
              │ e⁻ se transfieren
              ↓
┌─────────────────────────────────────┐
│  REDUCCIÓN (gana e⁻)                │
│  ↑ número de oxidación              │
│  Es el AGENTE OXIDANTE              │
└─────────────────────────────────────┘
```

---

# ⚡ PILA ELECTROQUÍMICA (Celda Galvánica)

## ¿Qué es una pila?

Es un dispositivo que **convierte energía química en energía eléctrica** mediante una reacción redox espontánea.

Piensa en una pila AA: dentro hay sustancias químicas que reaccionan y producen electricidad.

---

## Partes de una Pila

```
        ┌──── Puente Salino ────┐
        │    (permite flujo      │
        │     de iones)          │
        │                        │
    ┌───┴───┐              ┌───┴───┐
    │       │              │       │
    │  Zn   │  e⁻ →  →  → │  Cu   │
    │       │              │       │
    │(Ánodo)│              │(Cátodo)│
    └───┬───┘              └───┬───┘
        │                      │
    Zn²⁺ entra            Cu²⁺ sale
    a la solución        de la solución
```

### Componentes:

**ÁNODO (electrodo negativo -):**
- Donde ocurre la OXIDACIÓN
- Pierde electrones
- Los electrones SALEN de aquí
- Ejemplo: Zn → Zn²⁺ + 2e⁻

**CÁTODO (electrodo positivo +):**
- Donde ocurre la REDUCCIÓN
- Gana electrones
- Los electrones LLEGAN aquí
- Ejemplo: Cu²⁺ + 2e⁻ → Cu

**PUENTE SALINO:**
- Tubo con una solución de sal (KCl, KNO₃)
- Mantiene neutralidad eléctrica
- Permite que los iones se muevan entre las dos soluciones

---

## Notación de la Pila

**Formato estándar:**
```
Ánodo | Solución del ánodo || Solución del cátodo | Cátodo
```

**Ejemplo:**
```
Zn | Zn²⁺ || Cu²⁺ | Cu
```

**Reglas:**
- `|` = interfase entre metal y solución
- `||` = puente salino
- Se escribe: oxidación → reducción (izquierda a derecha)

---

## Fuerza Electromotriz (fem o ΔE)

**¿Qué es?** El "empuje eléctrico" de la pila, el voltaje que produce.

**Unidad:** Voltios (V)

### Potencial Estándar de Electrodo (E°)

Cada semirreacción tiene un E° (medido en condiciones estándar: 25°C, 1M, 1atm)

**Tabla de potenciales (valores importantes):**

| Semirreacción (Reducción) | E° (V) |
|---------------------------|--------|
| F₂ + 2e⁻ → 2F⁻ | +2.87 |
| Au³⁺ + 3e⁻ → Au | +1.50 |
| Ag⁺ + e⁻ → Ag | +0.80 |
| Cu²⁺ + 2e⁻ → Cu | +0.34 |
| 2H⁺ + 2e⁻ → H₂ | 0.00 (referencia) |
| Zn²⁺ + 2e⁻ → Zn | -0.76 |
| Na⁺ + e⁻ → Na | -2.71 |

**Interpretación:**
- **E° positivo y alto** → Fuerte oxidante (le gusta GANAR electrones)
- **E° negativo** → Fuerte reductor (le gusta PERDER electrones)

---

## Calcular el Potencial de la Pila (E°celda)

**Fórmula:**
```
E°celda = E°cátodo - E°ánodo
```

**Recuerda:**
- Cátodo = donde ocurre la REDUCCIÓN (el que tiene mayor E°)
- Ánodo = donde ocurre la OXIDACIÓN (el que tiene menor E°)

### Ejemplo Paso a Paso:

**Calcular E° de la pila Zn-Cu:**

**Semirreacciones:**
```
Zn²⁺ + 2e⁻ → Zn    E° = -0.76 V
Cu²⁺ + 2e⁻ → Cu    E° = +0.34 V
```

**Paso 1:** Identificar cátodo y ánodo
- Cu tiene mayor E° → es el CÁTODO (reducción)
- Zn tiene menor E° → es el ÁNODO (oxidación)

**Paso 2:** Aplicar fórmula
```
E°celda = E°cátodo - E°ánodo
E°celda = (+0.34) - (-0.76)
E°celda = +1.10 V
```

**Interpretación:**
- Como E°celda > 0 → La reacción es **ESPONTÁNEA** ✓
- La pila funcionará y producirá 1.10 voltios

---

## Relación con Energía de Gibbs

**Fórmula:**
```
ΔG° = -nFE°
```

**Donde:**
- ΔG° = Energía de Gibbs estándar (J/mol)
- n = número de electrones transferidos
- F = Constante de Faraday = 96,485 C/mol
- E° = Potencial estándar (V)

**Relación:**
- Si E° > 0 → ΔG° < 0 → **Espontánea**
- Si E° < 0 → ΔG° > 0 → **No espontánea**

---

## Ecuación de Nernst (Condiciones NO estándar)

En la vida real, las concentraciones NO son siempre 1M. La ecuación de Nernst ajusta el potencial:

**Fórmula general:**
```
E = E° - (RT/nF) ln Q
```

**A 25°C simplificada:**
```
E = E° - (0.0592/n) log Q
```

**Donde:**
- E = Potencial real (V)
- E° = Potencial estándar (V)
- n = electrones transferidos
- Q = Cociente de reacción = [productos]/[reactivos]

### Ejemplo:

**Pila:** Zn | Zn²⁺(0.1M) || Cu²⁺(2M) | Cu

**E° = 1.10 V** (calculado antes)

**Reacción:**
```
Zn + Cu²⁺ → Zn²⁺ + Cu
```

**Q = [Zn²⁺]/[Cu²⁺] = 0.1/2 = 0.05**

**n = 2** (se transfieren 2 electrones)

**Calcular E:**
```
E = 1.10 - (0.0592/2) log(0.05)
E = 1.10 - (0.0296) × (-1.30)
E = 1.10 + 0.038
E = 1.14 V
```

**Conclusión:** A estas concentraciones, la pila produce 1.14 V (más que en condiciones estándar)

---

## Flujo de Electrones en la Pila

**Dirección:**
```
Ánodo (oxidación) ──e⁻→→→ Cátodo (reducción)
    (-)                        (+)
  E° más bajo              E° más alto
```

**¿Por qué?**
- El ánodo tiene "exceso" de electrones (porque se oxida)
- El cátodo "necesita" electrones (porque se reduce)
- Los electrones fluyen naturalmente de donde sobran a donde faltan

---

## Tipos de Celdas Electroquímicas

### 1. PILA GALVÁNICA (Espontánea)

- **ΔG < 0**, **E° > 0**
- Convierte energía química → eléctrica
- **Ejemplo:** Pilas AA, baterías de auto

### 2. CELDA ELECTROLÍTICA (No espontánea)

- **ΔG > 0**, **E° < 0**
- Requiere electricidad externa para funcionar
- Convierte energía eléctrica → química
- **Ejemplo:** Electrodeposición de metales, carga de baterías

---

# 💧 SOLUBILIDAD Y PRECIPITACIÓN

## ¿Qué es la Solubilidad?

**Solubilidad:** Cantidad máxima de soluto que se puede disolver en un solvente a una temperatura dada.

**Ejemplo visual:**
```
Imagina que tienes una taza de agua (solvente)
Le agregas azúcar (soluto)
Al principio se disuelve...
Pero llega un punto donde no se disuelve más
→ Llegaste a la SATURACIÓN
```

---

## Estados de una Solución

### 1. INSATURADA
```
Soluto disuelto < Solubilidad máxima
"Todavía le cabe más azúcar"
```

### 2. SATURADA
```
Soluto disuelto = Solubilidad máxima
"Ya no puede disolver más"
En equilibrio dinámico
```

### 3. SOBRESATURADA
```
Soluto disuelto > Solubilidad máxima
"Tiene más de lo que debería"
Inestable, precipitará
```

---

## Reglas de Solubilidad (¿Qué se disuelve?)

### COMPUESTOS SOLUBLES:

**1. Sales de metales alcalinos (Grupo 1) y NH₄⁺**
```
Ejemplos: NaCl, KNO₃, NH₄Cl
SIEMPRE solubles
```

**2. Nitratos (NO₃⁻) y Acetatos (CH₃COO⁻)**
```
Ejemplos: AgNO₃, Ca(NO₃)₂
SIEMPRE solubles
```

**3. Halogenuros (Cl⁻, Br⁻, I⁻)**
```
Solubles EXCEPTO con: Ag⁺, Pb²⁺, Hg₂²⁺
AgCl ✗ (insoluble)
NaCl ✓ (soluble)
```

**4. Sulfatos (SO₄²⁻)**
```
Solubles EXCEPTO con: Ca²⁺, Sr²⁺, Ba²⁺, Pb²⁺, Ag⁺
BaSO₄ ✗ (insoluble)
Na₂SO₄ ✓ (soluble)
```

### COMPUESTOS INSOLUBLES:

**Carbonatos (CO₃²⁻), Fosfatos (PO₄³⁻), Sulfuros (S²⁻), Hidróxidos (OH⁻)**
```
Ejemplos: CaCO₃, Ca₃(PO₄)₂, FeS, Fe(OH)₃
Insolubles EXCEPTO con alcalinos y NH₄⁺
```

---

## Constante del Producto de Solubilidad (Kps)

**¿Qué es?** Un número que indica qué tan soluble es una sal.

### Para la reacción:
```
AB(s) ⇌ A⁺(ac) + B⁻(ac)
```

**Fórmula del Kps:**
```
Kps = [A⁺][B⁻]
```

**Notas importantes:**
- NO incluimos el sólido en la expresión
- Solo incluimos iones en solución
- Kps es constante a una temperatura dada

### Ejemplo con estequiometría:

**Para:**
```
Ag₂CrO₄(s) ⇌ 2Ag⁺(ac) + CrO₄²⁻(ac)
```

**Kps:**
```
Kps = [Ag⁺]²[CrO₄²⁻]
```

**Los exponentes vienen de los coeficientes estequiométricos**

---

## Relación entre Kps y Solubilidad (s)

**Solubilidad molar (s):** Moles de soluto que se disuelven en 1L de solución saturada

### Ejemplo Paso a Paso:

**Calcular la solubilidad del AgCl si Kps = 1.8 × 10⁻¹⁰**

**Paso 1:** Escribir la ecuación de disociación
```
AgCl(s) ⇌ Ag⁺(ac) + Cl⁻(ac)
```

**Paso 2:** Tabla ICE (Inicial, Cambio, Equilibrio)

| | AgCl(s) | Ag⁺ | Cl⁻ |
|---------|---------|-----|-----|
| Inicial | — | 0 | 0 |
| Cambio | — | +s | +s |
| Equilibrio | — | s | s |

**Paso 3:** Expresión del Kps
```
Kps = [Ag⁺][Cl⁻]
1.8 × 10⁻¹⁰ = (s)(s)
1.8 × 10⁻¹⁰ = s²
```

**Paso 4:** Resolver
```
s = √(1.8 × 10⁻¹⁰)
s = 1.3 × 10⁻⁵ M
```

**Respuesta:** La solubilidad del AgCl es 1.3 × 10⁻⁵ M (muy poco soluble)

---

### Ejemplo más complejo:

**Calcular s del Ca₃(PO₄)₂ si Kps = 2.0 × 10⁻²⁹**

**Paso 1:**
```
Ca₃(PO₄)₂(s) ⇌ 3Ca²⁺(ac) + 2PO₄³⁻(ac)
```

**Paso 2:** Tabla ICE

| | Ca₃(PO₄)₂ | Ca²⁺ | PO₄³⁻ |
|-------------|-----------|------|-------|
| Inicial | — | 0 | 0 |
| Cambio | — | +3s | +2s |
| Equilibrio | — | 3s | 2s |

**Paso 3:**
```
Kps = [Ca²⁺]³[PO₄³⁻]²
2.0 × 10⁻²⁹ = (3s)³(2s)²
2.0 × 10⁻²⁹ = 27s³ × 4s²
2.0 × 10⁻²⁹ = 108s⁵
```

**Paso 4:**
```
s⁵ = 1.85 × 10⁻³¹
s = 1.2 × 10⁻⁷ M
```

---

## Producto Iónico (Q) y Precipitación

**Q:** Como Kps, pero con concentraciones iniciales (no en equilibrio)

**Fórmula:**
```
Q = [A⁺]inicial[B⁻]inicial
```

### Criterio de Precipitación:

```
Q < Kps → Solución INSATURADA (no precipita)
Q = Kps → Solución SATURADA (equilibrio)
Q > Kps → Solución SOBRESATURADA (SÍ precipita)
```

### Ejemplo:

**¿Se formará precipitado si mezclamos 100 mL de AgNO₃ 0.002M con 100 mL de NaCl 0.001M?**

**Kps(AgCl) = 1.8 × 10⁻¹⁰**

**Paso 1:** Concentraciones después de mezclar (volumen total = 200 mL)
```
[Ag⁺] = (0.002 M × 100 mL)/200 mL = 0.001 M
[Cl⁻] = (0.001 M × 100 mL)/200 mL = 0.0005 M
```

**Paso 2:** Calcular Q
```
Q = [Ag⁺][Cl⁻]
Q = (0.001)(0.0005)
Q = 5 × 10⁻⁷
```

**Paso 3:** Comparar Q con Kps
```
Q = 5 × 10⁻⁷
Kps = 1.8 × 10⁻¹⁰

Q > Kps → SÍ SE FORMA PRECIPITADO ✓
```

---

## Efecto del Ion Común

**Definición:** La solubilidad de una sal DISMINUYE cuando se añade un ion que ya está presente en la solución.

**Ejemplo cotidiano:**
```
Imagina que en una fiesta hay muchas personas (iones)
Si agregas más personas del mismo tipo, el espacio se satura más rápido
```

### Ejemplo Numérico:

**¿Cuál es la solubilidad del AgCl en una solución de NaCl 0.1M?**

**Kps(AgCl) = 1.8 × 10⁻¹⁰**

**Paso 1:** El NaCl aporta Cl⁻ (ion común)
```
AgCl(s) ⇌ Ag⁺(ac) + Cl⁻(ac)
```

**Paso 2:** Tabla ICE

| | AgCl | Ag⁺ | Cl⁻ |
|---------|------|-----|---------|
| Inicial | — | 0 | 0.1 (del NaCl) |
| Cambio | — | +s | +s |
| Equilibrio | — | s | 0.1 + s |

**Paso 3:** Kps
```
Kps = [Ag⁺][Cl⁻]
1.8 × 10⁻¹⁰ = (s)(0.1 + s)
```

Como s es muy pequeño: 0.1 + s ≈ 0.1

```
1.8 × 10⁻¹⁰ = s(0.1)
s = 1.8 × 10⁻⁹ M
```

**Comparación:**
- Solubilidad en agua pura: 1.3 × 10⁻⁵ M
- Solubilidad en NaCl 0.1M: 1.8 × 10⁻⁹ M

**¡La solubilidad disminuyó 7000 veces!**

---

# 🔗 IONES COMPLEJOS

## ¿Qué es un Ion Complejo?

**Definición:** Un ion formado por un catión metálico central rodeado de moléculas o iones (llamados ligandos).

**Estructura:**
```
    Ligando
       |
Ligando—Metal—Ligando
       |
    Ligando
```

**Ejemplos comunes:**
```
[Ag(NH₃)₂]⁺  → Plata con amoníaco
[Cu(H₂O)₆]²⁺ → Cobre con agua
[Fe(CN)₆]³⁻  → Hierro con cianuro
```

---

## Constante de Formación (Kf)

**¿Qué mide?** Qué tan estable es el ion complejo.

### Para la reacción:
```
Ag⁺(ac) + 2NH₃(ac) ⇌ [Ag(NH₃)₂]⁺(ac)
```

**Kf:**
```
Kf = [Ag(NH₃)₂⁺]/([Ag⁺][NH₃]²)
```

**Interpretación:**
- **Kf grande** (>10⁶) → Complejo MUY estable
- **Kf pequeño** (<10³) → Complejo poco estable

---

### Ejemplo Práctico:

**El AgCl es insoluble (Kps pequeño), pero se disuelve en NH₃. ¿Por qué?**

**Reacciones:**
```
1) AgCl(s) ⇌ Ag⁺(ac) + Cl⁻(ac)         Kps = 1.8 × 10⁻¹⁰
2) Ag⁺(ac) + 2NH₃(ac) ⇌ [Ag(NH₃)₂]⁺   Kf = 1.6 × 10⁷
```

**Reacción global:**
```
AgCl(s) + 2NH₃(ac) ⇌ [Ag(NH₃)₂]⁺(ac) + Cl⁻(ac)

Kglobal = Kps × Kf = (1.8 × 10⁻¹⁰)(1.6 × 10⁷) = 2.9 × 10⁻³
```

**Conclusión:** Aunque Kps es muy pequeño, la formación del complejo estable compensa y el AgCl se disuelve.

---

# 🌡️ TERMOQUÍMICA

## ¿Qué es la Termoquímica?

**Estudio del calor (energía térmica) que se absorbe o libera en las reacciones químicas.**

---

## Conceptos Fundamentales

### 1. Sistema y Alrededores

**SISTEMA:** La parte del universo que estamos estudiando (la reacción química)

**ALREDEDORES:** Todo lo demás (el laboratorio, el aire, etc.)

```

