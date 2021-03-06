import React from "react"

import Layout from "../templates/Layout"
import Banner from "../components/Banner"
import { withLoginStateContext } from "../contexes/LoginStateContext"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"
import Container from "../components/Container"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const IndexPage = () => (
  <Layout>
    <Banner />
    <Container>
      <section id="yleistä">
        <h1>Tietoa kurssista</h1>
        <p>
          Tietokantojen perusteet on kaikille avoin ja ilmainen nimensä
          mukaisesti tietokantojen perusteet opettava verkkokurssi. Kurssilla
          perehdytään Structured Query Language (SQL) -kieleen, tiedon
          kuvausmenetelmiin, tietokantojen suunnitteluun sekä tietokantaa
          käyttävien sovellusten toteutukseen. Kurssille osallistuminen vaatii
          ennakkotiedot ohjelmoinnista Helsingin yliopiston Ohjelmoinnin MOOC
          -kurssin laajuudessa (vastaa kursseja Ohjelmoinnin perusteet ja
          Ohjelmoinnin jatkokurssi).
        </p>
        <p>
          Tietokantojen perusteet vastaa sisällöltään ja laajuudeltaan Helsingin
          yliopiston tietojenkäsittelytieteen laitoksen kurssia Tietokantojen
          perusteet (TKT10004), joka on viiden opintopisteen kurssi.
        </p>
      </section>

      <section id="sisältö-ja-aikataulu">
        <h2>Sisältö ja aikataulu</h2>
        <p>
          Kurssi koostuu seitsemästä tehtäviä sisältävästä osasta, kahdesta
          projektista sekä kokeesta. Kunkin osan opiskeluun sekä siihen
          liittyvien tehtävien tekemiseen kannattaa varata noin 5-20 tuntia.
          Varaamme oikeuden aikataulun ja aiheiden muutoksiin.
        </p>
        <p>
          Kurssin sisältö tarkentuu kurssin edetessä. Alla on kuvattuna
          osakohtainen materiaalin julkaisuaikataulu sekä materiaalissa olevien
          tehtävien viimeiset palautuspäivämäärät.
        </p>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Aikataulu</TableCell>
              <TableCell>Julkaisu</TableCell>
              <TableCell>Deadline</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Osa 1</TableCell>
              <TableCell>14.1.2019</TableCell>
              <TableCell>21.1.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 2</TableCell>
              <TableCell>21.1.2019</TableCell>
              <TableCell>28.1.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 3</TableCell>
              <TableCell>28.1.2019</TableCell>
              <TableCell>4.2.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 4</TableCell>
              <TableCell>4.2.2019</TableCell>
              <TableCell>11.2.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 5</TableCell>
              <TableCell>11.2.2019</TableCell>
              <TableCell>18.2.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 6</TableCell>
              <TableCell>18.2.2019</TableCell>
              <TableCell>25.2.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 7</TableCell>
              <TableCell>25.2.2019</TableCell>
              <TableCell>4.3.2019</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          Kurssilla on viikoittaisten kurssitehtävien lisäksi kaksi laajempaa
          projektia. Projektien tehtävänannot julkaistaan Moodle-järjestelmässä,
          johon ne myös palautetaan. Projektit vertaisarvioidaan.
        </p>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Projekti</TableCell>
              <TableCell>Julkaisu</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Vertaisarvioinnin deadline</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Suunnitteluprojekti</TableCell>
              <TableCell>28.1.2019</TableCell>
              <TableCell>11.2.2019</TableCell>
              <TableCell>18.2.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ohjelmointiprojekti</TableCell>
              <TableCell>11.2.2019</TableCell>
              <TableCell>25.2.2019</TableCell>
              <TableCell>4.3.2019</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          <b>
            Palautusten määräajat ovat aina maanantaisin klo 23:55:00.
            Virallisena määräaikana käytetään aina tehtäviä vastaanottavan
            palvelimen kelloa, joka on Suomen ajassa. Huomaa, että oman koneesi
            kello voi olla jäljessä tai edellä, joten älä jätä tehtävien
            tekemistä ja palauttamista viime hetkeen.
          </b>
        </p>
      </section>

      <section id="ilmoittautuminen">
        <h2>Ilmoittautuminen</h2>
        <p>
          Kurssille ilmoittautuminen tapahtuu kolmea eri väylää riippuen
          taustastasi.
        </p>
        <ul>
          <li>
            Helsingin yliopiston opiskelijat ilmoittautuvat kurssille suoraan
            WebOodin kautta.
          </li>
          <li>
            Helsingin yliopiston Avoimen yliopiston nykyiset ja tulevat
            opiskelijat ilmoittautuvat osoitteessa{" "}
            <OutboundLink
              href="https://www.avoin.helsinki.fi/palvelut/esittely.aspx?o=126422231"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.avoin.helsinki.fi/palvelut/esittely.aspx?o=126422231
            </OutboundLink>
          </li>
          <li>
            DEFA-hankkeeseen osallistuvat opiskelijat ilmoittautuvat osoitteessa{" "}
            <OutboundLink
              href="https://www.avoin.helsinki.fi/palvelut/esittely.aspx?o=124756797"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.avoin.helsinki.fi/palvelut/esittely.aspx?o=124756797
            </OutboundLink>
          </li>
        </ul>
        <p>Kurssi on kaikille maksuton.</p>
      </section>

      <section id="kokeet">
        <h2>Kokeet</h2>
        <p>
          Kurssista järjestetään yksi koe sekä kaksi uusintaa. Kokeen hyväksytty
          suorittaminen johtaa kurssin läpäisyyn, mikäli kurssin tehtävät ja
          projektit on suorittanut tarpeeksi hyvin. Arvosana määräytyy tehtyjen
          tehtävien ja projektien perusteella.
        </p>
        <ul>
          <li>Kurssikoe: Lauantai 9.3.2019 klo 10-14</li>
          <li>Uusintakoe 1: Lauantai 13.4.2019 klo 10-14</li>
          <li>Uusintakoe 2: Keskiviikko 15.5.2019 klo 10-14</li>
        </ul>
        <p>
          Uusintakokeisiin osallistutaan mikäli osallistuja ei läpäise
          varsinaista kurssikoetta. Kokeet tehdään kurssin
          Moodle-järjestelmässä.
        </p>
        <p>
          Helsingin yliopiston opiskelijat voivat suorittaa kurssin myös
          erillistentillä Examinariumissa. Tenttimateriaalina on kurssin
          materiaali (ml. tehtävät ja projektit).
        </p>
      </section>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
