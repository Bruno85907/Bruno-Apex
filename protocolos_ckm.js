/* GERADO de protocolos_ckm.json (fonte: base Reciclagem Médica). NÃO editar à mão — regenerar da base. */
window.PROTOCOLOS_CKM = {
  "schema_version": "1.0",
  "fonte": "Base de Conhecimento CKM — Módulos 0-17 (Reciclagem Médica)",
  "gerado_em": "2026-05-21",
  "status": "validado clinicamente pelo Dr. Bruno Piubelli Biluca em 22/05/2026",
  "observacao": "Camada estruturada lida pelo motor do prontuário. Cada condição mapeia para um diagnóstico (campo hpp_*). O protocolo do paciente = união das condições marcadas, modulada por DRC/idade/sexo/história familiar.",
  "conditions": {
    "has": {
      "label": "Hipertensão arterial",
      "diagnostico": "hpp_has",
      "metas": {
        "pa": "< 130/80 mmHg universal (AHA/ACC 2025) para todos os adultos em tratamento; encorajar < 120/80 se tolerado (SPRINT); individualizar apenas idoso frágil/risco de hipotensão ortostática"
      },
      "medicacoes_1a_linha": [
        {
          "nome": "Losartana",
          "classe": "BRA",
          "dose": "50-100 mg/dia",
          "obs": "Preferir se albuminúria (nefroproteção)"
        },
        {
          "nome": "Anlodipino",
          "classe": "BCC",
          "dose": "5-10 mg/dia",
          "obs": "Terapia combinada"
        },
        {
          "nome": "Clortalidona",
          "classe": "Diurético tiazídico",
          "dose": "12,5-25 mg/dia",
          "obs": "Evitar se TFGe < 30 (preferir de alça)"
        }
      ],
      "combinacao_preferencial": "IECA/BRA + BCC, ou IECA/BRA + tiazídico; iniciar combinada se PA ≥ 20/10 acima da meta",
      "adjuvantes": [
        {
          "nome": "Espironolactona",
          "classe": "ARM",
          "dose": "25 mg/dia",
          "obs": "HAS resistente (cuidado K/TFGe)"
        }
      ],
      "labs": [
        {
          "nome": "Função renal + K",
          "cadencia": "Basal; 2-4 semanas após iniciar/ajustar IECA/BRA ou diurético; depois 6-12 meses"
        },
        {
          "nome": "Painel CKM (lipídico, glicemia/HbA1c, RAC, ácido úrico)",
          "cadencia": "Basal e anual"
        }
      ],
      "imagem": [
        {
          "nome": "ECG 12 derivações",
          "cadencia": "Basal; anual ou por sintoma"
        },
        {
          "nome": "Ecocardiograma",
          "cadencia": "Por indicação (HVE/lesão de órgão-alvo); não rotineiro"
        }
      ],
      "monitoramento": [
        "PA domiciliar (MRPA)",
        "peso",
        "RAC anual"
      ],
      "diretriz": "Diretriz Brasileira de Hipertensão 2020 (SBC); ACC/AHA 2025; ESC/ESH 2024"
    },
    "dm2": {
      "label": "Diabetes mellitus tipo 2",
      "diagnostico": "hpp_dm2",
      "metas": {
        "hba1c": "< 7% (individualizar)",
        "glicemia_jejum": "80-130 mg/dL"
      },
      "medicacoes_1a_linha": [
        {
          "nome": "Metformina XR",
          "classe": "Biguanida",
          "dose": "500-2000 mg/dia",
          "obs": "1ª linha; ajustar/evitar se TFGe < 30"
        },
        {
          "nome": "Dapagliflozina",
          "classe": "iSGLT2",
          "dose": "10 mg/dia",
          "obs": "Precoce se DCV/DRC/IC — benefício CV e renal"
        },
        {
          "nome": "Semaglutida",
          "classe": "GLP1-RA",
          "dose": "0,25→1 mg/sem SC",
          "obs": "Se DCV/obesidade; HbA1c elevada"
        }
      ],
      "labs": [
        {
          "nome": "HbA1c",
          "cadencia": "Trimestral até controle; depois semestral"
        },
        {
          "nome": "Função renal + RAC",
          "cadencia": "Anual (rastreio nefropatia); mais frequente se DRC"
        },
        {
          "nome": "Perfil lipídico",
          "cadencia": "Anual"
        }
      ],
      "imagem": [
        {
          "nome": "ECG",
          "cadencia": "Basal e conforme risco CV"
        }
      ],
      "rastreio": [
        "Fundo de olho anual",
        "Exame dos pés a cada consulta"
      ],
      "monitoramento": [
        "Glicemia capilar conforme esquema",
        "HbA1c",
        "peso",
        "PA"
      ],
      "diretriz": "SBD 2023-2024; ADA Standards of Care 2025; KDIGO 2024 (FLOW)",
      "drc_avancada_REVISAR": "ADA 2026 / KDIGO 2026 (draft): em DM2 com TFGe <30 mL/min/1.73m², GLP-1 RA é PREFERIDO sobre outros hipoglicemiantes pelo menor risco de hipoglicemia e benefício CV/renal. Em diálise, considerar manter/iniciar GLP-1 RA para redução de risco CV.",
      "pas_meta_REVISAR": "PAS < 120 mmHg em adultos com DM2 e alto risco CV/renal (ADA 2026)",
      "estratificacao_CV_REVISAR": "Usar equação AHA PREVENT (com TFGe e UACR)"
    },
    "obesidade": {
      "label": "Obesidade",
      "diagnostico": "hpp_obes",
      "metas": {
        "peso": "Perda de 5-10% em 6 meses",
        "imc": "< 25 kg/m² (alvo individualizado)"
      },
      "medicacoes_1a_linha": [
        {
          "nome": "Semaglutida",
          "classe": "GLP1-RA",
          "dose": "titular até 2,4 mg/sem SC",
          "obs": "IMC ≥ 30 ou ≥ 27 c/ comorbidade, após MEV"
        },
        {
          "nome": "Tirzepatida",
          "classe": "GIP/GLP1-RA",
          "dose": "titular 2,5→15 mg/sem SC",
          "obs": "Alternativa de alta eficácia"
        }
      ],
      "labs": [
        {
          "nome": "Metabólico (glicemia/HbA1c, lipídico, hepático/FIB-4, TSH, ácido úrico, vit D)",
          "cadencia": "Basal e 6-12 meses"
        }
      ],
      "exames_complementares": [
        "Bioimpedância (composição corporal)"
      ],
      "orientacao_apenas": "Reeducação alimentar e atividade física — plano detalhado por nutricionista/educador físico (NÃO prescrever no app)",
      "cirurgia": "Bariátrica/metabólica (ASMBS/IFSO 2022): IMC ≥ 35 independe de comorbidade; IMC 30-34,9 considerar se doença metabólica (DM2, HAS, MASLD, apneia do sono)",
      "diretriz": "SBEM/ABESO; ASMBS/IFSO 2022; ADA/ACC 2025-2026"
    },
    "dislipidemia": {
      "label": "Dislipidemia",
      "diagnostico": "hpp_dlp",
      "gatilho_lab": "Iniciar estatina se LDL ≥ 100 com risco, ou conforme categoria de risco (não depende só do checkbox)",
      "metas_ldl": {
        "muito_alto_risco_ASCVD": "< 55 mg/dL (REVISAR — 2026 ACC/AHA)",
        "ASCVD_nao_muito_alto": "< 70 mg/dL (REVISAR — 2026 ACC/AHA)",
        "alto_risco_primaria": "< 70 mg/dL (sugerido em DRC+DM)",
        "intermediario": "< 100",
        "baixo": "< 130"
      },
      "medicacoes_1a_linha": [
        {
          "nome": "Rosuvastatina",
          "classe": "Estatina",
          "dose": "10 mg (moderada) a 20-40 mg (alta intensidade)",
          "obs": "Dose por risco; máx 10 mg se TFGe < 30"
        },
        {
          "nome": "Ezetimiba",
          "classe": "Inibidor absorção",
          "dose": "10 mg/dia",
          "obs": "Associar se não atingir meta"
        }
      ],
      "avancado": [
        {
          "nome": "Evolocumabe/Alirocumabe",
          "classe": "iPCSK9",
          "obs": "Muito alto risco fora da meta apesar de estatina+ezetimiba"
        },
        {
          "nome": "Ácido bempedoico",
          "obs": "Intolerância a estatina"
        }
      ],
      "hipertrigliceridemia": "TG > 500 → fibrato (prevenir pancreatite); alto risco c/ TG 135-499 → icosapent etil",
      "suplemento": [
        {
          "nome": "Coenzima Q10",
          "dose": "100-200 mg/dia",
          "obs": "Suporte em uso de estatina (mialgia)"
        }
      ],
      "labs": [
        {
          "nome": "Perfil lipídico",
          "cadencia": "Basal; 8-12 semanas após início/ajuste; depois 6-12 meses"
        },
        {
          "nome": "TGO/TGP",
          "cadencia": "Basal; repetir só se sintoma"
        },
        {
          "nome": "CK",
          "cadencia": "Só se mialgia"
        }
      ],
      "drc_nota": "KDIGO: estatina (±ezetimiba) em DRC não-dialítica ≥ 50 anos. Em diálise, as diretrizes não mostram benefício de iniciar de novo (manter se já usava); na prática do Dr. Bruno, pode-se iniciar também em dialíticos, individualizado pelo risco CV.",
      "diretriz": "2026 ACC/AHA/Multisociety Guideline on Management of Dyslipidemia (Circulation 2026, DOI:10.1161/CIR.0000000000001423) — REVISAR antes de virar padrão; mantém SBC 2017 e ESC/EAS 2019 como referências.",
      "rastreio_universal_lpa_REVISAR": "Solicitar Lp(a) ao menos 1× na vida em todo adulto (2026 ACC/AHA)",
      "apoB_REVISAR": "ApoB como marcador adicional de risco residual (hipertrigliceridemia, DM, SM, LDL discordante)",
      "estratificacao_REVISAR": "Adotar equação AHA PREVENT (incorpora TFGe e UACR) em substituição às Pooled Cohort Equations; framework CPR"
    },
    "drc": {
      "label": "Doença Renal Crônica",
      "diagnostico": "hpp_drc",
      "estadiamento": "KDIGO CGA (TFGe G1-G5 × albuminúria A1-A3)",
      "medicacoes_base": [
        {
          "nome": "Losartana",
          "classe": "BRA",
          "dose": "50-100 mg/dia",
          "obs": "Nefroproteção se albuminúria (RAC ≥ 30); monitorar K/creatinina"
        },
        {
          "nome": "Dapagliflozina",
          "classe": "iSGLT2",
          "dose": "10 mg/dia",
          "obs": "Nefroproteção (DRC com/sem DM)"
        },
        {
          "nome": "Finerenona",
          "classe": "ARM seletivo",
          "dose": "10-20 mg/dia",
          "obs": "DRC + DM2 + albuminúria residual"
        },
        {
          "nome": "Semaglutida",
          "classe": "GLP1-RA",
          "dose": "0,25→1,0 mg/sem SC",
          "obs": "4º pilar em DM2 + DRC (FLOW −24% eventos renais)"
        }
      ],
      "cadencia_por_estagio": {
        "G1_G2": "Creatinina + RAC + K a cada 6-12 meses",
        "G3a": "A cada 6 meses + Ca/P/PTH/Vit D/Hb",
        "G3b": "A cada 3-4 meses + Ca/P/PTH/Vit D/Hb",
        "G4_G5": "A cada 1-3 meses; preparo de TRS; manejo anemia/acidose/DMO/K"
      },
      "complicacoes": [
        "DMO-DRC (ver módulo 13)",
        "Anemia da DRC (ver módulo 13)",
        "Acidose metabólica (bicarbonato)"
      ],
      "evitar": "Nefrotóxicos (AINE, contraste sem proteção); ajustar doses por TFGe",
      "diretriz": "KDIGO 2024 CKD",
      "manejo_hipercalemia": {
        "racional": "Hipercalemia é a principal causa de subdose/suspensão de IECA/BRA e finerenona; quelantes permitem manter a nefroproteção",
        "quelantes": [
          {
            "nome": "Ciclossilicato de zircônio sódico (Lokelma)",
            "dose": "Correção 10 g 3x/dia até 48h; manutenção 5 g/dia (2,5-10 g/dia)",
            "obs": "Início ~1h; atenção à carga de sódio (cautela IC/sobrecarga)"
          },
          {
            "nome": "Patiromer (Veltassa)",
            "dose": "8,4-25,2 g/dia",
            "obs": "Alternativa"
          }
        ]
      },
      "glp1_avancada_REVISAR": "KDIGO 2026 Diabetes-CKD (draft, março 2026) + ADA 2026: GLP-1 RA PREFERIDO em DRC avançada (TFGe <30). Em diálise, considerar manter/iniciar para redução CV/mortalidade.",
      "finerenona_combinada_REVISAR": "Em DRC + DM2 já em RASi + iSGLT2 com UACR persistente, finerenona como adicional (CONFIDENCE/NEJM 2025)."
    },
    "litiase": {
      "label": "Litíase renal",
      "diagnostico": "hpp_litiase",
      "investigacao_metabolica": "Recorrente/alto risco: urina 24h (volume, Ca, oxalato, citrato, ácido úrico, Na, pH); séricos (Ca, PTH se hiperCa, ácido úrico); análise do cálculo",
      "conduta": [
        {
          "item": "Hidratação",
          "detalhe": "Diurese > 2-2,5 L/dia (medida principal)"
        },
        {
          "nome": "Citrato de potássio",
          "obs": "Hipocitratúria; cálculo de cálcio/ácido úrico"
        },
        {
          "nome": "Tiazídico",
          "obs": "Hipercalciúria"
        },
        {
          "nome": "Alopurinol",
          "obs": "Cálculo de ácido úrico/hiperuricosúria + alcalinização (pH 6-6,5)"
        }
      ],
      "agudo": "Analgesia (AINE se função permitir/opioide); tansulosina (cálculo ureteral distal < 10mm); urologia (LECO/ureteroscopia/NLPC) por tamanho/local",
      "labs": [
        {
          "nome": "Urina 24h",
          "cadencia": "Basal → reavaliar 3-6 meses após mudança terapêutica → anual"
        }
      ],
      "imagem": [
        {
          "nome": "TC sem contraste (padrão-ouro) / USG",
          "cadencia": "Seguimento conforme carga/recorrência (não mensal)"
        }
      ],
      "diretriz": "AUA 2014; EAU Urolithiasis; SBU"
    },
    "cistos_renais": {
      "label": "Doenças císticas renais",
      "diagnostico": "hpp_cistos",
      "cisto_simples": "Bosniak I-II: benigno, sem seguimento",
      "cisto_complexo": "Bosniak IIF: seguimento imagem 6-12m; III-IV: avaliação urológica/cirurgia",
      "drpa": {
        "conduta": [
          "Controle rigoroso de PA com IECA/BRA — meta individualizada (HALT-PKD: <110/75 em jovens selecionados)",
          "Hidratação (supressão de vasopressina)",
          "Rastreio familiar; rastreio de aneurisma intracraniano em história familiar/ocupação de risco"
        ],
        "labs_imagem": "TFGe e PA periódicos; volume renal total (classificação de Mayo) em candidatos a tolvaptan",
        "medicacoes": [
          {
            "nome": "Tolvaptan",
            "classe": "Antagonista do receptor V2 de vasopressina",
            "indicacao": "DRPA com progressão rápida (retarda declínio da TFGe — TEMPO 3:4 / REPRISE)",
            "elegibilidade": [
              "Adulto 18-55 anos (estender a 56-65 se declínio de TFGe comprovado)",
              "DRPA confirmada e DRC estágios G1-G4 (TFGe ≥ ~25 mL/min/1,73 m²)",
              "≥1 critério de progressão rápida: Mayo Imaging Class 1C/1D/1E; queda de TFGe ≥5 mL/min/1,73m²/ano (1 ano) ou ≥2,5/ano por ≥5 anos; PROPKD/Genkyst >6; história familiar de DRC terminal precoce"
            ],
            "contraindicacoes": "Hepatopatia significativa; incapacidade de perceber/responder à sede; hipovolemia; hipernatremia; gestação/lactação",
            "monitoramento": "Transaminases e bilirrubina pré-início, mensal por 18 meses, depois trimestral (hepatotoxicidade); função renal/sódio; orientar aquaresis e hidratação"
          }
        ]
      },
      "diretriz": "Bosniak 2019; KDIGO/consenso DRPA (TEMPO 3:4, HALT-PKD)"
    },
    "glomerulonefrite": {
      "label": "Doenças glomerulares (glomerulonefrites)",
      "diagnostico": "hpp_gn",
      "investigacao": "Proteinúria 24h/RAC, sedimento, albumina, complemento C3/C4, sorologias (FAN, anti-DNA, ANCA, anti-MBG, HBV/HCV/HIV); BIÓPSIA RENAL para diagnóstico/classificação",
      "suporte": [
        "IECA/BRA em dose máxima tolerada (antiproteinúrico/nefroprotetor)",
        "PA < 130/80 (IgA: considerar PAS < 120 se tolerado)",
        "iSGLT2 (dapagliflozina/empagliflozina) na DRC proteinúrica — nefroproteção",
        "Controle de edema (restrição de sódio, diurético) e dislipidemia",
        "Anticoagulação se nefrótica grave (albumina < 2,5 g/dL, ex.: membranosa)"
      ],
      "labs": [
        {
          "nome": "Proteinúria + função renal + complemento",
          "cadencia": "Frequente durante atividade (1-3 meses); espaçar em remissão"
        }
      ],
      "diretriz": "KDIGO Glomerular Diseases 2021; SBN",
      "selecao": "Selecionar o diagnóstico histológico (da biópsia) para gerar o protocolo específico. O suporte acima vale para todos os subtipos.",
      "subtipos_histologicos": {
        "iga": {
          "label": "Nefropatia por IgA",
          "conduta": [
            "Otimizar suporte por ≥90 dias antes de imunossupressão",
            "Estratificar risco de progressão (proteinúria persistente ≥0,75-1 g/dia, TFGe, MEST-C)",
            "Terapia dirigida se proteinúria persistente e risco de progressão"
          ],
          "medicacoes": [
            {
              "nome": "Budesonida de liberação entérica (Nefecon)",
              "dose": "16 mg/dia por 9 meses",
              "obs": "Ação na mucosa intestinal (NefIgArd)"
            },
            {
              "nome": "Esparsentano",
              "dose": "conforme bula",
              "obs": "Antagonista duplo endotelina/AT1 — reduz proteinúria (PROTECT)"
            },
            {
              "nome": "Corticoide sistêmico",
              "dose": "individualizar",
              "obs": "Uso restrito pelo risco de toxicidade (TESTING)"
            },
            {
              "nome": "Atrasentano (Vanrafia) — REVISAR",
              "dose": "conforme bula (antagonista seletivo do receptor de endotelina A)",
              "obs": "ALIGN final 2,5 anos (Lancet 2026, DOI:10.1016/S0140-6736(26)00960-8): desacelera declínio de TFGe em IgAN de alto risco; benefício consistente em uso concomitante com iSGLT2. Adicionar a RASi otimizado. NÃO virar padrão sem validação Dr. Bruno."
            },
            {
              "nome": "Iptacopan (Fabhalta) — REVISAR",
              "dose": "200 mg VO 2x/dia (inibidor oral do fator B, via alternativa do complemento)",
              "obs": "APPLAUSE-IgAN final (ERA 2026, Glasgow): atinge desfecho primário de TFGe; subgrupo com declínio quase normal. Reservar para IgAN de alto risco com proteinúria residual apesar de terapia de base. NÃO virar padrão sem validação Dr. Bruno."
            }
          ],
          "monitoramento": "Proteinúria e TFGe a cada 3 meses"
        },
        "lesoes_minimas": {
          "label": "Doença de lesões mínimas",
          "conduta": [
            "Corticoide é 1ª linha (alta taxa de remissão)",
            "Tratar recidivas/corticodependência/corticorresistência com poupadores"
          ],
          "medicacoes": [
            {
              "nome": "Prednisona",
              "dose": "1 mg/kg/dia (máx 80 mg) até remissão, depois desmame",
              "obs": "1ª linha"
            },
            {
              "nome": "Inibidor de calcineurina (tacrolimo/ciclosporina), ciclofosfamida, rituximabe ou MMF",
              "dose": "conforme caso",
              "obs": "Recidivante/corticodependente/corticorresistente"
            }
          ],
          "monitoramento": "Proteinúria; glicemia e PA (vigilância do corticoide)"
        },
        "gesf": {
          "label": "Glomeruloesclerose segmentar e focal (GESF) primária",
          "conduta": [
            "Distinguir GESF primária (imunossupressão) de secundária/adaptativa (apenas suporte)",
            "Corticoide alta dose prolongado na primária (até ~16 semanas)"
          ],
          "medicacoes": [
            {
              "nome": "Prednisona",
              "dose": "1 mg/kg/dia (máx 80 mg), curso prolongado",
              "obs": "GESF primária"
            },
            {
              "nome": "Inibidor de calcineurina (tacrolimo/ciclosporina)",
              "dose": "conforme caso",
              "obs": "Corticorresistente ou contraindicação a corticoide"
            }
          ],
          "monitoramento": "Proteinúria, função renal, níveis de ICN se em uso"
        },
        "membranosa": {
          "label": "Nefropatia membranosa",
          "conduta": [
            "Dosar anti-PLA2R",
            "Estratificar risco (proteinúria, TFGe, evolução)",
            "Baixo risco: suporte por ~6 meses; moderado/alto risco: imunossupressão",
            "Anticoagular se albumina < 2,5 g/dL"
          ],
          "medicacoes": [
            {
              "nome": "Rituximabe",
              "dose": "conforme protocolo",
              "obs": "1ª linha no risco moderado (MENTOR)"
            },
            {
              "nome": "Ciclofosfamida + corticoide (esquema Ponticelli, alternados/6 meses)",
              "dose": "conforme protocolo",
              "obs": "Alto risco"
            },
            {
              "nome": "Inibidor de calcineurina (tacrolimo/ciclosporina) ± rituximabe",
              "dose": "conforme caso",
              "obs": "Alternativa"
            }
          ],
          "monitoramento": "Anti-PLA2R e proteinúria seriados (resposta imunológica precede a clínica)"
        },
        "nefrite_lupica": {
          "label": "Nefrite lúpica (classes III/IV ± V)",
          "conduta": [
            "Hidroxicloroquina para todos",
            "Indução + manutenção nas classes proliferativas",
            "Considerar regime triplo (KDIGO 2024)"
          ],
          "medicacoes": [
            {
              "nome": "Indução: MMF (2-3 g/dia) OU ciclofosfamida (Euro-Lupus 500 mg a cada 2 sem x6)",
              "dose": "+ corticoide (pulso metilprednisolona → prednisona em desmame)",
              "obs": "Classes III/IV ± V"
            },
            {
              "nome": "Belimumabe OU voclosporina",
              "dose": "conforme bula",
              "obs": "Acrescentar ao esquema (regime triplo — BLISS-LN/AURORA)"
            },
            {
              "nome": "Manutenção: MMF ou azatioprina",
              "dose": "≥ 3 anos",
              "obs": ""
            },
            {
              "nome": "Hidroxicloroquina",
              "dose": "≤ 5 mg/kg/dia",
              "obs": "Para todos os pacientes com lúpus"
            }
          ],
          "monitoramento": "Proteinúria, anti-DNA, C3/C4, função renal, hemograma"
        },
        "vasculite_anca": {
          "label": "Vasculite associada a ANCA (GN rapidamente progressiva)",
          "conduta": [
            "Urgência — iniciar indução precocemente",
            "Indução + manutenção"
          ],
          "medicacoes": [
            {
              "nome": "Indução: corticoide + rituximabe OU ciclofosfamida",
              "dose": "conforme protocolo",
              "obs": ""
            },
            {
              "nome": "Avacopan",
              "dose": "conforme bula",
              "obs": "Poupador de corticoide (ADVOCATE)"
            },
            {
              "nome": "Plasmaférese",
              "dose": "casos graves",
              "obs": "Creatinina muito elevada/diálise, hemorragia alveolar, sobreposição anti-MBG (PEXIVAS)"
            },
            {
              "nome": "Manutenção: rituximabe",
              "dose": "conforme protocolo",
              "obs": ""
            }
          ],
          "monitoramento": "Função renal, sedimento, ANCA, hemograma; vigilância de infecção"
        },
        "gn_pos_infecciosa": {
          "label": "GN pós-infecciosa",
          "conduta": [
            "Suporte (controle de PA e edema) e tratamento da infecção",
            "Geralmente autolimitada, bom prognóstico (sobretudo em crianças)",
            "Biópsia se curso atípico/persistente"
          ],
          "medicacoes": [
            {
              "nome": "Medidas de suporte (diurético, anti-hipertensivo)",
              "dose": "conforme necessidade",
              "obs": "Sem imunossupressão de rotina"
            }
          ],
          "monitoramento": "C3 (normaliza em 8-12 semanas), função renal, proteinúria/hematúria"
        },
        "anti_mbg": {
          "label": "Doença anti-MBG (Goodpasture)",
          "conduta": [
            "EMERGÊNCIA — iniciar tratamento imediatamente ao diagnóstico"
          ],
          "medicacoes": [
            {
              "nome": "Plasmaférese + corticoide + ciclofosfamida",
              "dose": "conforme protocolo",
              "obs": "Tríade de tratamento; prognóstico depende da rapidez"
            }
          ],
          "monitoramento": "Anti-MBG, função renal, função/imagem pulmonar"
        },
        "mpgn_c3": {
          "label": "GN membranoproliferativa / C3 glomerulopatia",
          "conduta": [
            "Investigar e tratar causa secundária (infecções, gamopatia, autoimune)",
            "Avaliar via do complemento",
            "Suporte; imunossupressão em casos idiopáticos progressivos"
          ],
          "medicacoes": [
            {
              "nome": "Corticoide ± MMF",
              "dose": "conforme caso",
              "obs": "Formas idiopáticas/progressivas"
            },
            {
              "nome": "Inibidor de complemento (ex.: eculizumabe, iptacopan)",
              "dose": "casos selecionados",
              "obs": "C3 glomerulopatia refratária"
            }
          ],
          "monitoramento": "Complemento (C3/C4, via alternativa), proteinúria, função renal"
        }
      },
      "iga_meta_REVISAR": "KDIGO 2025 IgAN: meta passa de UPCR <1 g/g para REMISSÃO COMPLETA (idealmente UPCR <0,3 g/g)",
      "iga_sparsentan_REVISAR": "Sparsentan (DEARA) é primeira linha após otimização de RASi; pode COMBINAR com iSGLT2 (real-world: redução adicional ~62% de UPCR mesmo já em iSGLT2).",
      "iga_imunossupressao": "Reservar imunossupressão sistêmica para proteinúria persistente acima do alvo após terapias de suporte (RASi+iSGLT2±sparsentan); budesonida-alvejada (NefIgArd) é opção com perfil sistêmico favorável.",
      "iga_terapia_dirigida_REVISAR": "ERA 2026 (jun/2026): consolidam-se TERAPIAS DIRIGIDAS em IgAN de alto risco somadas ao suporte de base (RASi otimizado + iSGLT2). (1) Antagonista do receptor de endotelina A — atrasentan (ALIGN final, Lancet 2026, DOI:10.1016/S0140-6736(26)00960-8) confirma benefício em DESFECHO de TFGe (não só proteinúria), consistente com iSGLT2. (2) Inibidor do complemento (via alternativa) — iptacopan (APPLAUSE-IgAN final, ERA 2026) atinge desfecho primário de TFGe. Esparsentano (PROTECT) permanece opção de antagonismo duplo endotelina/AT1. Seleção entre as classes por fenótipo, proteinúria residual e tolerância. REVISAR — pendente validação Dr. Bruno."
    },
    "itu": {
      "label": "Infecção do trato urinário",
      "diagnostico": "hpp_itu",
      "cistite_nao_complicada": [
        {
          "nome": "Nitrofurantoína",
          "dose": "100 mg 6/6h 5 dias",
          "obs": "Evitar se TFGe < 30"
        },
        {
          "nome": "Fosfomicina trometamol",
          "dose": "3 g dose única"
        },
        {
          "nome": "Sulfametoxazol-trimetoprim",
          "dose": "5 dias",
          "obs": "Se resistência local < 20%"
        }
      ],
      "pielonefrite_complicada": "Urocultura + antibiograma; ATB guiado; avaliar imagem (USG)/obstrução; desobstrução urgente se obstrutiva",
      "recorrente": "Investigar (urocultura, USG); profilaxia em casos selecionados; estrogênio tópico pós-menopausa",
      "bacteriuria_assintomatica": "Tratar APENAS em gestante e pré-procedimento urológico",
      "diretriz": "IDSA 2011; AUA/CUA 2019; SBU",
      "populacoes_especiais": {
        "regra_geral": "Nestes perfis, toda ITU é complicada: urocultura sempre, ajuste por TFGe, considerar resistência local (incl. BLEE)",
        "transplantado_renal": "Sempre complicada; urocultura/antibiograma. Cuidado com interações (fluoroquinolonas/macrolídeos × tacrolimo/ciclosporina; SMX-TMP eleva Cr/K — mas é profilaxia anti-PJP nos 6-12 meses iniciais). Nitrofurantoína geralmente ineficaz/contraindicada. Pielonefrite do enxerto: internar, ATB IV amplo espectro guiado por cultura, investigar obstrução/refluxo/coleção. Bacteriúria assintomática: NÃO tratar de rotina após 2 meses do transplante; individualizar no início",
        "drc_avancada": "Ajustar dose pela TFGe; nitrofurantoína contraindicada se TFGe < 30; fosfomicina perde eficácia em filtração muito baixa; evitar aminoglicosídeos; maior risco de urosepse (limiar baixo p/ parenteral/internação)",
        "diabetico": "Maior risco de pielonefrite enfisematosa, abscesso e necrose de papila; limiar baixo para imagem; tratar como complicada se mau controle/gravidade",
        "obstrucao_cateter": "Controle de fonte (desobstrução, troca/retirada de cateter) é essencial — ATB isolado falha"
      }
    },
    "sindrome_metabolica": {
      "label": "Síndrome metabólica",
      "diagnostico": "hpp_sm",
      "criterios": "≥ 3 de 5: CA aumentada (≥90H/≥80M cm), TG ≥ 150, HDL < 40H/<50M, PA ≥ 130/85, glicemia ≥ 100",
      "conduta": "MEV (perda 5-10%, atividade); tratar cada componente (ver módulos); priorizar iSGLT2/GLP1 quando indicado; rastrear DRC/MASLD/apneia/hiperuricemia",
      "labs": [
        {
          "nome": "Antropometria, PA, glicemia/HbA1c, lipídico, TFGe/RAC, FIB-4",
          "cadencia": "Basal e 6-12 meses"
        }
      ],
      "diretriz": "Harmonized JIS 2009; I Diretriz Brasileira de SM"
    },
    "masld": {
      "label": "MASLD (esteatose hepática metabólica)",
      "diagnostico": "hpp_nash",
      "estratificacao_fibrose": "FIB-4 (baixo < 1,3; indeterminado 1,3-2,67; alto > 2,67) → elastografia/encaminhar hepato se alto",
      "conduta": [
        "Perda de 7-10% do peso (mais eficaz)",
        "Controle metabólico",
        "GLP1-RA/tirzepatida; pioglitazona (MASH/DM2); resmetirom (MASH F2-F3)",
        "Evitar álcool; vacinar hepatites"
      ],
      "labs": [
        {
          "nome": "FIB-4 + função hepática",
          "cadencia": "Basal e anual (mais se indeterminado/alto)"
        }
      ],
      "diretriz": "AASLD/EASL 2023-2024 (nomenclatura MASLD); MAESTRO-NASH"
    },
    "hiperuricemia_gota": {
      "label": "Hiperuricemia e gota",
      "diagnostico": "hpp_gota",
      "assintomatica": "Em geral NÃO tratar com droga de rotina; MEV + tratar comorbidades",
      "crise": "Iniciar precoce: AINE, colchicina dose baixa ou corticoide; na DRC preferir corticoide",
      "redutor_urato": [
        {
          "nome": "Alopurinol",
          "dose": "iniciar baixo e titular",
          "alvo": "ácido úrico < 6 mg/dL (< 5 se tofos)",
          "obs": "1ª linha; ajustar na DRC; profilaxia c/ colchicina ao iniciar"
        },
        {
          "nome": "Febuxostate",
          "obs": "Alternativa; cautela CV (CARES)"
        }
      ],
      "labs": [
        {
          "nome": "Ácido úrico",
          "cadencia": "A cada 2-4 semanas na titulação; depois 6 meses"
        }
      ],
      "diretriz": "ACR 2020; EULAR; SBR"
    },
    "dmo_drc_anemia": {
      "label": "Complicações da DRC — DMO-DRC e Anemia",
      "diagnostico": "derivado (DRC G3+)",
      "dmo": "Controle de fósforo (dieta + quelantes, preferir sem cálcio se hiperCa/calcificação); vit D/análogos; calcimiméticos no hiperpara secundário; evitar hipercalcemia",
      "anemia": "Avaliar ferro (ferritina/IST); repor ferro (oral pré-diálise / IV se intolerância/ineficácia ou diálise); AEE com alvo Hb 10-11,5 (não > 11,5-13); HIF-PHi alternativa oral",
      "labs": [
        {
          "nome": "Ca, P, PTH, 25-OH-vit D",
          "cadencia": "G3 6-12m; G4 3-6m; G5 1-3m"
        },
        {
          "nome": "Hb + ferro",
          "cadencia": "G3 anual; G4-G5 3-6m (mais se em AEE)"
        }
      ],
      "diretriz": "KDIGO CKD-MBD 2017; KDIGO Anemia",
      "metas_ferro": {
        "pre_dialise": "Ferritina > 100 ng/mL e IST > 20%",
        "dialise": "Ferritina > 200 ng/mL e IST 20-30%",
        "prova_de_ferro_iv": "Considerar se IST ≤ 30% e ferritina ≤ 500 ng/mL (KDIGO)",
        "limite_seguranca": "Evitar manter ferritina > 500 ng/mL e IST > 30%"
      },
      "anemia_primeira_linha_REVISAR": "KDIGO 2026 Anemia in CKD (Kidney Int 2026): AEE (eritropoietina/análogos) SUGERIDA como primeira linha, ao invés de HIF-PHI, por preocupações persistentes de segurança CV. HIF-PHI fica como opção secundária.",
      "ferro_REVISAR": "Corrigir ferropenia ANTES de AEE/HIF-PHI. Em dialítica, ferro IV proativo (alvo TSAT ~30%, ferritina 100–500 ng/mL).",
      "hb_alvo": "10–12 g/dL; evitar Hb >13 (risco CV/tromboembólico)"
    }
  },
  "modificadores": {
    "drc_cadencia": "Quando DRC presente, a cadência de labs sobrepõe a das demais condições conforme o estágio (cadencia_por_estagio em drc). FORA de DRC G3-5, NÃO intensificar coleta.",
    "rastreio_cancer": {
      "regra": "Disparar por idade + sexo + história familiar (ver módulo 14)",
      "itens": [
        {
          "exame": "Mamografia",
          "alvo": "Mulheres a partir de 40 anos, anual (padrão da base); antecipar se hist. familiar/BRCA"
        },
        {
          "exame": "Citologia/HPV (colo do útero)",
          "alvo": "Mulheres 25-64, a cada 3 anos"
        },
        {
          "exame": "Colonoscopia ou FIT",
          "alvo": "Ambos 45-75; antecipar se hist. familiar"
        },
        {
          "exame": "PSA (decisão compartilhada)",
          "alvo": "Homens 50-69 (45 se negro/hist. familiar)"
        },
        {
          "exame": "TC tórax baixa dose",
          "alvo": "Tabagista ≥ 20 maços-ano, 50-80 anos"
        }
      ],
      "marcadores_tumorais": {
        "regra": "NÃO usar para rastreio populacional (baixa S/E, falsos-positivos). Uso dirigido apenas:",
        "indicacoes": [
          "PSA: próstata, decisão compartilhada",
          "AFP + US: vigilância de CHC na cirrose (semestral)",
          "CA-125 + US TV: só alto risco hereditário (BRCA) sem cirurgia redutora",
          "CEA / CA 19-9 / CA 15-3: seguimento de câncer já diagnosticado, não rastreio"
        ]
      }
    },
    "vacinacao": {
      "regra": "Por idade + DRC/imunossupressão (ver módulo 15)",
      "itens": [
        {
          "vacina": "Influenza",
          "alvo": "Anual (todos)"
        },
        {
          "vacina": "dT/dTpa",
          "alvo": "Reforço 10/10 anos"
        },
        {
          "vacina": "Hepatite B (esquema reforçado)",
          "alvo": "DRC avançada/diálise; checar Anti-HBs"
        },
        {
          "vacina": "Pneumocócica (VPC + VPP23)",
          "alvo": "≥ 60 anos e DRC/alto risco"
        },
        {
          "vacina": "Herpes-zóster recombinante",
          "alvo": "≥ 60 anos"
        },
        {
          "regra": "Evitar vírus vivo em imunossuprimido/transplante; vacinar ANTES da imunossupressão"
        }
      ]
    },
    "risco_cv": {
      "estratificacao": "PREVENT (AHA 2023) / ASCVD; alto risco automático: DCV estabelecida, DRC, DM com lesão de órgão-alvo, LDL ≥ 190",
      "aas": "NÃO de rotina em prevenção primária; sim em secundária",
      "calculadora_primaria": "PREVENT (AHA 2023) — dirige a conduta; incorpora TFGe, HbA1c, albuminúria; risco em 10 e 30 anos",
      "calculadora_secundaria": "ASCVD (Pooled Cohort) — referência comparativa; limiares de tratamento calibrados nela; PREVENT estima risco menor (cuidado p/ não subtratar)"
    },
    "nutrologia": {
      "label": "Nutrologia / Terapia Nutricional Médica na CKM",
      "diagnostico": "tnt_ckm",
      "principios": [
        "Avaliação nutricional inicial: peso, IMC, CA, força de preensão palmar (Jamar), SARC-F, recordatório 24h, SGA em DRC G4-G5",
        "Calorias 25-35 kcal/kg/dia (KDOQI 2020) — ajustar para perda ponderal em obesidade (déficit 500-750 kcal/dia)",
        "Sódio < 2.000 mg/dia (ou < 1.500 mg em HAS resistente / DRC com edema)",
        "Fibras 25-30 g/dia",
        "Restringir aditivos fosforados antes de restringir fósforo orgânico em DRC G3b-G5"
      ],
      "padroes_alimentares": [
        {
          "padrao": "DASH",
          "indicacao_primaria": "HAS, síndrome metabólica",
          "efeito": "PAS -3 a -5 mmHg; aditivo à restrição de Na"
        },
        {
          "padrao": "Mediterrânea",
          "indicacao_primaria": "DCV, MASLD, DM2, dislipidemia, DRC G1-G3",
          "efeito": "DCV -24 a -28% (PREDIMED)"
        },
        {
          "padrao": "PLADO (Plant-Dominant Low-Protein)",
          "indicacao_primaria": "DRC G3-G4 não dialítica",
          "efeito": "Retarda progressão; melhora acidose; reduz toxinas urêmicas",
          "regra": "Proteína 0,6-0,8 g/kg/dia com ≥ 50% vegetal; Na < 3 g; fibra 25-30 g"
        },
        {
          "padrao": "Plant-based / vegetariana",
          "indicacao_primaria": "Prevenção primária CKM",
          "regra": "Suplementar B12 obrigatoriamente"
        },
        {
          "padrao": "Hipocalórica + Mediterrânea",
          "indicacao_primaria": "Obesidade CKM, MASLD",
          "efeito": "Peso -5 a -10%; resolução de MASH"
        }
      ],
      "proteina_por_estagio_drc": {
        "G1_G2": "0,8-1,0 g/kg/dia",
        "G3a": "0,6-0,8 g/kg/dia",
        "G3b_G4_sem_DM": "0,55-0,60 g/kg/dia",
        "G3b_G4_com_DM": "0,60-0,80 g/kg/dia",
        "G5_nao_dialitica": "0,55-0,60 g/kg/dia ± cetoanálogos",
        "HD": "1,0-1,2 g/kg/dia",
        "DP": "1,0-1,2 g/kg/dia",
        "transplantado": "0,8-1,0 g/kg/dia"
      },
      "suplementacao_racional": [
        "Vitamina D (colecalciferol) se 25-OH-D < 30 ng/mL",
        "Vitamina B12 em veganos, idosos, uso prolongado de IBP/metformina, B12 < 300 pg/mL",
        "Ômega-3 (EPA+DHA) 1-2 g/dia em alto risco CV; icosapente etila se TG > 150 mg/dL (REDUCE-IT)",
        "Bicarbonato de sódio se HCO3- < 22 mEq/L em DRC (cuidado com sobrecarga)",
        "Cetoanálogos em DRC G4-G5 com proteína 0,3-0,4 g/kg/dia (supervisionado)",
        "EVITAR: vit A megadose, mega-cálcio em DRC, erva-de-são-joão em transplantado, ervas aristolóquicas"
      ],
      "indicacoes_encaminhamento_nutricionista": [
        "DRC G3b-G5 com restrição proteica prescrita",
        "Diálise (HD ou DP) — acompanhamento mensal",
        "Obesidade grau II-III em farmacoterapia/pré-cirúrgico",
        "DM2 mal controlado",
        "MASLD/MASH com meta de perda 7-10%",
        "Hiperoxalúria, hipocitratúria, hipercalciúria, hiperuricosúria",
        "SARC-F ≥ 4 ou perda involuntária > 5% em 6 meses",
        "Pediatria CKM (todos)"
      ],
      "diretriz": "KDOQI 2020 Nutrition in CKD; KDIGO 2024; ADA 2026 Section 5 (MNT); EASL-EASD-EASO 2024 MASLD; ACR 2020 Gout; AUA 2014/2024 Urolithiasis; SBN/ABRAN/SBC nutrição"
    },
    "tracking_performance_wearables": {
      "label": "Indicadores de performance, longevidade e wearables (foco em saúde — não em estética)",
      "indicadores_metabolicos_funcionais": [
        {
          "indicador": "VO2 máx (estimado ou medido)",
          "metodo": "Teste cardiopulmonar (padrão-ouro), teste de caminhada de 6 minutos, estimativa por wearable (Apple Watch, Garmin)",
          "cadencia": "Anual (basal e seguimento); 6 meses se em programa de reabilitação CV",
          "alvo": "≥ percentil 50 para idade/sexo; cada +1 MET = -13-15% mortalidade (Kokkinos JACC 2022)"
        },
        {
          "indicador": "HRV (SDNN, RMSSD)",
          "metodo": "Holter 24h (clínico), wearable validado (Oura Gen 4, Whoop) para tendência",
          "cadencia": "Conforme indicação clínica; tendência semanal/mensal por wearable",
          "alvo": "SDNN ≥ 70 ms (corte com HR 1,73 para MACE); foco em tendência individual"
        },
        {
          "indicador": "Massa muscular e força",
          "metodo": "Bioimpedância (BIA) ou DXA para massa; dinamômetro de preensão palmar (Jamar) + SARC-F",
          "cadencia": "Anual; semestral em CKD G3b-G5 ou idoso frágil",
          "alvo_preensao": "H ≥ 27 kg, M ≥ 16 kg (EWGSOP2)",
          "alvo_sarc_f": "< 4 pontos"
        },
        {
          "indicador": "Passos diários e atividade física",
          "metodo": "Wearable (Apple Watch, Fitbit, Garmin) ou IPAQ-SF",
          "alvo": "≥ 7.000-8.000 passos/dia (associado a menor mortalidade); ≥ 150 min/sem moderada + treino resistido 2x/sem"
        },
        {
          "indicador": "Tempo no alvo glicêmico (TIR) via CGM",
          "metodo": "FreeStyle Libre 3, Dexcom G7, Stelo (não-DM)",
          "indicacao": "DM2 em insulina, DM2 não-insulino com HbA1c > 7,5%, gestação, hipoglicemias",
          "alvo": "TIR ≥ 70% (70-180 mg/dL); TBR < 4%; ADA 2025/2026"
        },
        {
          "indicador": "Pressão arterial via wearable",
          "metodo": "Apple Watch (notificação de hipertensão — FDA set/2025), Withings BPM, Omron HeartGuide",
          "indicacao": "Triagem populacional (Apple) ou MRPA validada (manguito)",
          "alvo": "< 130/80 mmHg"
        },
        {
          "indicador": "Fibrilação atrial paroxística",
          "metodo": "Apple Watch (AFib History — FDA MDDT 2024; sens 98,5%, spec 99,3%), KardiaMobile",
          "indicacao": "Triagem oportunística ≥ 65 anos, palpitações, AVC criptogênico"
        },
        {
          "indicador": "Qualidade de sono",
          "metodo": "Oura Ring (acurácia 89% vs PSG), Apple Watch, Whoop",
          "alvo": "7-9 h/noite; eficiência > 85%; SAOS rastreado se ronco/sonolência/HAS resistente"
        }
      ],
      "wearables_aprovados_e_uso_clinico": [
        "Apple Watch — AFib History (FDA MDDT 2024), ECG, hipertensão (FDA set/2025), notificação de queda, SpO2",
        "FreeStyle Libre 3 / Dexcom G7 — CGM com dados em tempo real",
        "Withings BPM / Omron HeartGuide — PA validada",
        "Oura Ring Gen 4 — HRV, sono, temperatura cutânea (alta acurácia)",
        "Whoop 5.0 — HRV, sono, esforço (acurácia moderada)",
        "KardiaMobile (AliveCor) — ECG de 1 ou 6 derivações",
        "Garmin Venu / Fenix — VO2máx estimado, HRV, passos"
      ],
      "diretriz_e_fontes": "Mandsager R et al. JAMA Netw Open 2018; Kokkinos P et al. JACC 2022; ESC Task Force HRV 1996 (atualizações Frontiers CVM 2025); EWGSOP2 (Cruz-Jentoft AJ 2019); FDA Digital Health Center of Excellence; ADA Standards 2026 (CGM)"
    },
    "proms_ichom": {
      "label": "Patient-Reported Outcome Measures — Standard Sets do ICHOM (uso INTERNO)",
      "visibilidade": "INTERNA — uso clínico do Dr. Bruno (prontuário CKM e boletim DOCX). NÃO publicar na newsletter da APEX.",
      "fonte": "https://www.ichom.org/",
      "principio": "Medir o que importa ao paciente — qualidade de vida, capacidade funcional, sintomas, adesão. Padronizado, comparável entre serviços.",
      "standard_sets_aplicaveis": [
        {
          "set": "CKD Standard Set (ICHOM 2019)",
          "proms_centrais": [
            "KDQOL-36 (qualidade de vida)",
            "EQ-5D-5L (utilidade)",
            "PHQ-9 (depressão)"
          ],
          "cadencia": "Basal + anual; semestral em G4-G5"
        },
        {
          "set": "Diabetes Standard Set",
          "proms_centrais": [
            "PAID (Problem Areas in Diabetes)",
            "EQ-5D-5L",
            "PHQ-9"
          ],
          "cadencia": "Anual"
        },
        {
          "set": "Heart Failure Standard Set",
          "proms_centrais": [
            "KCCQ-12 (Kansas City Cardiomyopathy Questionnaire)",
            "EQ-5D-5L"
          ],
          "cadencia": "Basal, 30 dias, 6 e 12 meses"
        },
        {
          "set": "Hypertension Standard Set (LMIC)",
          "proms_centrais": [
            "BMQ-Specific (crenças sobre medicação)",
            "Hill-Bone (adesão)",
            "IPAQ-SF (atividade física)",
            "WHO STEPS (sal)"
          ],
          "cadencia": "Anual"
        },
        {
          "set": "Obesity Standard Set (Lancet 2024)",
          "proms_centrais": [
            "IWQOL-Lite (Impact of Weight on Quality of Life)",
            "EQ-5D-5L",
            "PHQ-9"
          ],
          "cadencia": "Basal + a cada 6 meses durante intervenção, anual após"
        }
      ],
      "regra_pratica": "Coletar via prontuário CKM em consulta de retorno; compor sumário gráfico de tendência; usar para discussão com paciente e ajuste de plano"
    }
  },
  "validado_em": "2026-05-22",
  "atualizado_em": "2026-06-01",
  "atualizacao_2026_05_24": "Adicionados blocos 'nutrologia' (Módulo 18), 'tracking_performance_wearables' e 'proms_ichom' conforme expansão de escopo solicitada pelo Dr. Bruno",
  "atualizacao_2026_05_25": {
    "responsavel": "Tarefa agendada vigilancia-semanal-literatura-ckm (executada pelo orientador automatizado)",
    "status": "REVISAR — pendente validação Dr. Bruno antes de virar padrão clínico",
    "mudancas": [
      "Dislipidemia: metas LDL 2026 ACC/AHA (<55 muito alto risco; <70 ASCVD), rastreio universal Lp(a), ApoB, PREVENT.",
      "DM2 e DRC: GLP-1 RA preferido em TFGe <30 (ADA 2026 + KDIGO 2026 Diabetes-CKD draft).",
      "DMO-DRC/Anemia: AEE permanece 1ª linha; HIF-PHI 2ª linha (KDIGO 2026 Anemia in CKD).",
      "Glomerulonefrite IgAN: meta de remissão completa; sparsentan como 1ª linha após RASi, podendo combinar com iSGLT2 (KDIGO 2025 IgAN)."
    ],
    "fontes": [
      "Grundy SM et al. 2026 ACC/AHA Dyslipidemia Guideline. Circulation 2026. DOI:10.1161/CIR.0000000000001423",
      "ADA. Standards of Care in Diabetes—2026. Diabetes Care 2026;49(Supl 1):S183, S246",
      "KDIGO 2026 Diabetes-CKD Public Review Draft. KDIGO, março 2026",
      "KDIGO 2026 Anemia in CKD Guideline. Kidney International 2026",
      "KDIGO 2025 IgAN/IgAV Guideline. Kidney Int 2025; Clin Kidney J 2025;18(11):sfaf324",
      "Bakris GL et al. CONFIDENCE Trial. NEJM 2025. DOI:10.1056/NEJMoa2410659"
    ]
  },
  "atualizacao_2026_06_01": {
    "responsavel": "Tarefa agendada vigilancia-semanal-literatura-ckm (executada pelo orientador automatizado em 01/06/2026)",
    "status": "REVISAR — pendente validação Dr. Bruno antes de virar padrão clínico",
    "mudancas": [
      "DM2 + comorbidades CKM: ADA atualizou em maio/2026 a Section 4 dos Standards of Care 2026 — cuidado holístico integrado para DM2 + ≥1 condição crônica (DRC, IC, MASLD, obesidade, transtornos mentais). Reforço: GLP-1 RA + iSGLT2 como espinha dorsal. GLP-1 RA preferido em TFGe <30 mL/min/1.73m².",
      "DRC: KDIGO encerrou em 11/05/2026 a revisão pública do KDIGO 2026 AKI/AKD Guideline. Antecipa publicação final ainda em 2026 com framework integrado AKI-AKD-DRC, biomarcadores estruturais, alertas eletrônicos e seguimento pós-AKI obrigatório aos 3 e 12 meses.",
      "Risco CV / IC: finerenona consolidada como SEGUNDO PILAR (com iSGLT2) em IC com FEVE ≥40% (HFmrEF/HFpEF), com base no FINEARTS-HF (NEJM 2024) e aprovação FDA de 14/07/2025. Em CKM com IC + FE preservada: considerar finerenona em adição a iSGLT2 + RASi conforme tolerância (TFGe ≥25, K+ <5.0)."
    ],
    "fontes": [
      "ADA. Section 4. Comprehensive Medical Evaluation and Assessment of Comorbidities — Standards of Care in Diabetes—2026 (Living Update, maio/2026). Diabetes Care 2026;49(Supl 1).",
      "KDIGO 2026 AKI/AKD Clinical Practice Guideline — Public Review Draft (revisão pública encerrada em 11/05/2026). kdigo.org/kdigo-2026-aki-akd-guideline-draft-available-for-public-review.",
      "Solomon SD, McMurray JJV et al. FINEARTS-HF. N Engl J Med 2024;391:1475–1485. DOI:10.1056/NEJMoa2407107.",
      "FDA Approval — KERENDIA® (finerenone) for HFmrEF/HFpEF, 14/07/2025.",
      "Boletim_CKM_Semana_2026-06-01.docx (vigilância editorial)."
    ]
  },
  "atualizacao_2026_06_08": {
    "responsavel": "Tarefa agendada vigilancia-semanal-literatura-ckm (executada pelo orientador automatizado em 08/06/2026)",
    "status": "REVISAR — pendente validação Dr. Bruno antes de virar padrão clínico",
    "mudancas": [
      "Glomerulonefrite / Nefropatia por IgA: ERA 2026 (Glasgow, 3-6/jun) consolida terapias dirigidas em IgAN de alto risco. ALIGN final 2,5 anos (Lancet, 4/jun/2026) — atrasentan (Vanrafia), antagonista seletivo do receptor de endotelina A, desacelera declínio de TFGe (desfecho confirmatório, não só proteinúria), benefício consistente com iSGLT2. APPLAUSE-IgAN final — iptacopan (Fabhalta), inibidor oral do fator B, atinge desfecho primário de TFGe. Terapias dirigidas somam-se ao suporte de base (RASi otimizado + iSGLT2).",
      "Anemia da DRC (consolidação): KDIGO 2026 Anemia in CKD publicada no Kidney International, com comentário ERBP (NDT). Limiares mais proativos para ferro IV (sobretudo hemodiálise); HIF-PHI em casos selecionados; correção de ferropenia antes de iniciar AEE. Sem mudança de meta de Hb (10–12 g/dL, evitar >13).",
      "Diabetes/Obesidade (vigilância, SEM mudança de conduta): ADA 86ª Scientific Sessions (New Orleans, 5-8/jun) — late-breaking de incretinas (head-to-head titulação semaglutida 1→2 mg vs troca para tirzepatida; pipeline CagriSema, retatrutida, survodutida, oral). Apenas sinaliza direção; aguardar publicação peer-reviewed para incorporação."
    ],
    "fontes": [
      "Atrasentan in patients with IgA nephropathy (ALIGN): final results of a randomised, double-blind, placebo-controlled phase 3 trial. Lancet 2026 (publicado online 04/06/2026). DOI:10.1016/S0140-6736(26)00960-8.",
      "Novartis Fabhalta (iptacopan) — APPLAUSE-IgAN final Phase III (desfecho primário de TFGe). ERA Congress 2026, Glasgow (3-6/jun/2026); Novartis media release 04/06/2026.",
      "KDIGO 2026 Clinical Practice Guideline for the Management of Anemia in CKD. Kidney Int 2026 (S0085-2538(25)00495-8). Comentário ERBP: Nephrol Dial Transplant 2026. DOI:10.1093/ndt/gfag014.",
      "American Diabetes Association — 86th Scientific Sessions, New Orleans, 5-8/jun/2026 (late-breaking abstracts; aguardar publicação peer-reviewed)."
    ]
  }
};
