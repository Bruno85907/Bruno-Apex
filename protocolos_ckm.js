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
      "diretriz": "SBD 2023-2024; ADA Standards of Care 2025; KDIGO 2024 (FLOW)"
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
        "muito_alto": "< 50 mg/dL (e ↓≥50%)",
        "alto": "< 70",
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
      "diretriz": "Atualização Diretriz Brasileira de Dislipidemias 2017 (SBC); ESC/EAS 2019; AHA/ACC 2018"
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
      }
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
      }
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
      }
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
    }
  },
  "validado_em": "2026-05-22"
};
