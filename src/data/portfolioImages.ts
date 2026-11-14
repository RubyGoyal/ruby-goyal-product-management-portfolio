import heroWorkspaceImg from '../assets/images/hero_pm_workspace_1794574371104.jpg';
import signalpostImg from '../assets/images/case_signalpost_1794574370767.jpg';
import contentIqImg from '../assets/images/case_content_iq_1794574371723.jpg';
import growwRagImg from '../assets/images/case_groww_rag_1794574372861.jpg';
import contentSuiteImg from '../assets/images/case_content_suite_1794574372775.jpg';

export type CaseImageKey = 'signalpost' | 'content-iq' | 'groww-rag' | 'content-suite';

export const HERO_IMAGE = heroWorkspaceImg;

export const CASE_STUDY_IMAGES: Record<CaseImageKey, string> = {
  signalpost: signalpostImg,
  'content-iq': contentIqImg,
  'groww-rag': growwRagImg,
  'content-suite': contentSuiteImg,
};
