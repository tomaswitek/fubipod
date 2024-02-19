"use client";

import {useState} from "react";
import {
  CookieConsentBanner,
  triggerCookieConsentBanner,
} from "@porscheofficial/cookie-consent-banner-react";

// const texts = {
//   btnLabelAcceptAndContinue: "Agree and continue",
//   btnLabelSelectAllAndContinue: "Select all and continue",
//   btnLabelOnlyEssentialAndContinue:
//     "Continue with technically required cookies only",
//   btnLabelPersistSelectionAndContinue: "Save selection and continue",
//   contentSettingsDescription:
//     "You can decide which cookies are used by selecting the respective options below. Please note that your selection may impair in the functionality of the service.",
//   technicallyRequiredDescription:
//     "Enable you to navigate and use the basic functions and to store preferences.",
//   technicallyRequiredLabel: "Technically necessary cookies",
//   analyticsDescription:
//     "Enable us to determine how visitors interact with our service in order to improve the user experience.",
//   analyticsLabel: "Analysis cookies",
//   marketingDescription:
//     "Enable us to offer and evaluate relevant content and interest-based advertising.",
//   marketingLabel: "Marketing cookies",
//   bannerText:
//     'We use cookies and similar technologies to provide certain features, enhance the user experience and deliver content that is relevant to your interests. Depending on their purpose, analysis and marketing cookies may be used in addition to technically necessary cookies. By clicking on "Agree and continue", you declare your consent to the use of the aforementioned cookies.',
//   detailedSettingsText:
//     "Here you can make detailed settings or revoke your consent (in part if necessary) with effect for the future. For further information, please refer to our Privacy Policy.",
// };

const texts = {
  btnLabelAcceptAndContinue: "Souhlasím a pokračovat",
  btnLabelSelectAllAndContinue: "Vybrat vše a pokračovat",
  btnLabelOnlyEssentialAndContinue:
    "Pokračovat pouze s technicky nezbytnými cookies",
  btnLabelPersistSelectionAndContinue: "Uložit výběr a pokračovat",
  contentSettingsDescription:
    "Můžete rozhodnout, které cookies budou použity výběrem níže uvedených možností. Vezměte prosím na vědomí, že váš výběr může omezit funkcionalitu služby.",
  technicallyRequiredDescription:
    "Umožňují vám navigovat a používat základní funkce a ukládat předvolby.",
  technicallyRequiredLabel: "Technicky nezbytné cookies",
  analyticsDescription:
    "Umožňují nám určit, jak návštěvníci interagují s naší službou za účelem zlepšení uživatelského zážitku.",
  analyticsLabel: "Analytické cookies",
  marketingDescription:
    "Umožňují nám nabízet a hodnotit relevantní obsah a reklamu založenou na zájmech.",
  marketingLabel: "Marketingové cookies",
  bannerText:
    'Používáme cookies a podobné technologie k poskytování určitých funkcí, zlepšení uživatelského zážitku a dodávání obsahu relevantního pro vaše zájmy. V závislosti na jejich účelu mohou být kromě technicky nezbytných cookies použity také analytické a marketingové cookies. Kliknutím na "Souhlasím a pokračovat" vyjadřujete svůj souhlas s používáním výše uvedených cookies.',
  detailedSettingsText:
    "Zde můžete provést detailní nastavení nebo odvolat svůj souhlas (částečně, pokud je to nutné) s účinkem do budoucna. Další informace naleznete v našich zásadách ochrany osobních údajů.",
};

export function CookieConsent() {
  const [acceptedCategories, setAcceptedCategories] = useState([]);
  const initConsent = () => {};
  return (
    <CookieConsentBanner
      handlePreferencesUpdated={initConsent}
      handlePreferencesRestored={initConsent}
      btnLabelAcceptAndContinue={texts.btnLabelAcceptAndContinue}
      btnLabelSelectAllAndContinue={texts.btnLabelSelectAllAndContinue}
      btnLabelOnlyEssentialAndContinue={texts.btnLabelOnlyEssentialAndContinue}
      btnLabelPersistSelectionAndContinue={
        texts.btnLabelPersistSelectionAndContinue
      }
      contentSettingsDescription={texts.contentSettingsDescription}
      availableCategories={[
        {
          description: texts.technicallyRequiredDescription,
          key: "technically_required",
          label: texts.technicallyRequiredLabel,
          isMandatory: true,
        },
        {
          description: texts.analyticsDescription,
          key: "analytics",
          label: texts.analyticsLabel,
        },
        {
          description: texts.marketingDescription,
          key: "marketing",
          label: texts.marketingLabel,
        },
      ]}
    >
      {texts.bannerText}
      <button
        onClick={() => {
          triggerCookieConsentBanner({showDetails: true});
        }}
        onKeyPress={() => {
          triggerCookieConsentBanner({showDetails: true});
        }}
        type="button"
      >
        Here
      </button>{" "}
      {texts.detailedSettingsText}
      <a href="/privacy-policy">Privacy Policy</a>.
    </CookieConsentBanner>
  );
}

export default CookieConsent;
