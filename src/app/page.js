"use client";
import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import axios from "axios";
import { useRef, useState } from "react";

export default function Home() {
  const [catsList, setCatsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const catApi = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {
      "Content-Type": "application/json",
      "x-api-key":
        "live_7js20lzfFwp81RICYI5rsSKUrH5pfNvg8fME3T03p3jibmNAhUvu4gRuge2Q6XPI",
    },
  });

  async function fetchRandomCatImage() {
    try {
      const response = await catApi.get(
        `images/search?limit=2&size=med&name=${searchInput}`
      );
      console.log(response.data);
      setCatsList(response.data);
    } catch (error) {
      console.error("Erro ao buscar imagem de gato:", error);
    }
  }

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <header className={styles.header}>
        <div>
          <Image
            className={styles.headerImage}
            src="/logo-conversion.svg"
            alt="Logo Conversion"
            width={190}
            height={50}
            priority
          />
        </div>
        <div className={styles.links}>
          <Link to="cats" spy={true} smooth={true}>
            Busca por gatos
          </Link>
          <Link to="services" spy={true} smooth={true}>
            Conheça nossos serviços
          </Link>
        </div>
        <div>
          <a href="https://www.conversion.com.br/contato">
            <button className={styles.meetingButton}>Agendar Reunião</button>
          </a>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.cats} id="cats">
          <div>
            <div className={styles.texts}>
              <h1 className={styles.blueText}>Teste para estagiários de DEV</h1>
              <h1>Sistema de busca de fotos de gatos</h1>
            </div>
            <div className={styles.search}>
              <input
                type="text"
                value={searchInput}
                onChange={(event) => {
                  handleInputChange(event);
                }}
                placeholder="Pesquisar gato"
              />

              <button
                onClick={async () => {
                  await fetchRandomCatImage();
                }}
              >
                Pesquisar
              </button>
            </div>
            <div className={styles.catImages}>
              {catsList.length > 0 &&
                catsList.map((cat) => (
                  <div key={cat.id} className={styles.catImage}>
                    <Image
                      src={cat.url}
                      alt="Imagem de Gato"
                      width={360}
                      height={480}
                      objectFit="contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.services} id="services">
          <div className={styles.headerServices}>
            <h2>Conheça nossos serviços</h2>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <a href="">
                <div>
                  <Image
                    className={styles.icons}
                    src="/link-building-4.svg"
                    alt="Link building"
                    width={190}
                    height={50}
                    priority
                  />
                </div>
                <h2>Link building 4.0</h2>
                <div>
                  Somos uma assessoria de imprensa com foco em criar pautas para
                  conquistar backlinks de veículos com autoridade.
                </div>
                <div className={styles.more}>Saiba mais</div>
              </a>
            </div>
            <div className={styles.card}>
              <a href="">
                <div>
                  <Image
                    className={styles.icons}
                    src="/mdi_head-lightbulb-outline.svg"
                    alt="Lightbulb svg"
                    width={190}
                    height={50}
                    priority
                  />
                </div>
                <h2>Inbound SEO</h2>
                <div>
                  Estratégia e execução de conteúdo para gerar tráfego
                  qualificado.
                </div>
                <div className={styles.more}>Saiba mais</div>
              </a>
            </div>
            <div className={styles.card}>
              <a href="">
                <div>
                  <Image
                    className={styles.icons}
                    src="/data-driven-pr-1.svg"
                    alt="Data Driven"
                    width={190}
                    height={50}
                    priority
                  />
                </div>
                <h2>E-commerce SEO</h2>
                <div>
                  Aumente a visibilidade de seu e-commerce com as estratégias de
                  SEO validadas por grandes e-commerces.
                </div>
                <div className={styles.more}>Saiba mais</div>
              </a>
            </div>
            <div className={styles.card}>
              <a href="">
                <div>
                  <Image
                    className={styles.icons}
                    src="/Edit.svg"
                    alt="Edit svg"
                    width={190}
                    height={50}
                    priority
                  />
                </div>
                <h2>Growth Content</h2>
                <div>
                  Novo serviço de marketing de conteúdo orientado a gerar maior
                  tráfego qualificado de busca orgânica.
                </div>
                <div className={styles.more}>Saiba mais</div>
              </a>
            </div>
            <div className={styles.card}>
              <a href="">
                <div>
                  <Image
                    className={styles.icons}
                    src="/strategic-seo-1.svg"
                    alt="Strategic seo"
                    width={190}
                    height={50}
                    priority
                  />
                </div>
                <h2>Squad de SEO</h2>
                <div>
                  Conte com um time dedicado de profissionais multidisciplinares
                  por um mesmo objetivo.
                </div>
                <div className={styles.more}>Saiba mais</div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>Felipe Fonseca</div>
        <div>Email: devfelipefonseca@outlook.com</div>
      </footer>
    </div>
  );
}
