import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

export const HrvatskaKulturnaPutovnica = () => {
  const { t } = useTranslation();

  return (
    <div className="accordion-menu">
      <Accordion defaultActiveKey="0">
        <h2 className="accordion-title">{t("cultural-passport")}</h2>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-header">
            {t("checkered-flag")}
          </Accordion.Header>
          <Accordion.Body>{t("checkered-flag-description")}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accordion-header">
            {t("triplet")}
          </Accordion.Header>
          <Accordion.Body>{t("triplet-description")}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="accordion-header">
            {t("croat-name")}
          </Accordion.Header>
          <Accordion.Body>{t("croat-name-description")}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="accordion-header">
            {t("glagolitic")}
          </Accordion.Header>
          <Accordion.Body>{t("glagolitic-description")}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
