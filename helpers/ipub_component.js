//Components
import Dashboard_PL from '../app/irightsapp/components/Dashboard-PL/Dashboard_PL';
import Dashboard_PR from '../app/irightsapp/components/Dashboard-PR/Dashboard_PR';
import Dashboard_TR from '../app/irightsapp/components/Dashboard-TR/Dashboard_TR';
import Dashboard_PR_TL from '../app/irightsapp/components/Dashboard-PR-TL/Dashboard_PR_TL';
import Dashboard_TR_TL from '../app/irightsapp/components/Dashboard-TR-TL/Dashboard_TR_TL';
import Dashboard_Customer from '../app/irightsapp/components/Dashboard-Customer/Dashboard_Customer';
import CreateProjectPage from '../app/irightsapp/containers/Project/Create-Project-Page';
import UpdateProjectPage from '../app/irightsapp/containers/Project/Update-Project-Page';
import UserAccessPage from '../app/irightsapp/containers/Project/User-Access-Page';
import ProjectList from '../app/irightsapp/v2/components/Project-list/Project-list';
import TaskCreation from '../app/irightsapp/components/Taskcreation/Task-Creation';
import TaskCreationNew from '../app/irightsapp/v2/components/Taskcreation/Task-Creation';
import Taskallocation from '../app/irightsapp/components/Task-Allocation/Task-Allocation';
import Gantt from '../app/irightsapp/components/Gantt/taskalocationLoader';
import PR_Clearance from '../app/irightsapp/components/PhotoResearch_Clearance/Photo-clearance';
import PR_ClearanceNew from '../app/irightsapp/v2/components/PhotoResearch_Clearance_New/Photo-clearance-new';
import { ThirdPartyLogPage, ThirdPartyPreClearancePage, QualityAssurancePage, DetermineAndConfirmPage, ThirdPartyPLPage, ThirdPartyCustomerPage, TextClearancePage,TextApprovalPLPage, TextClearanceCustomerPage } from '../app/irightsapp/containers/Text-Research';
import { PhotoClearanceApprovalPage, PhotoClearanceReviewerPage, PhotoPreClearancePage, PhotoResearchPage, PhotoQAPage, PhotoCustomerSelectionPage, PhotoCustomerApproverPage, PhotoCustomerReviewPage, PhotoPLPage, PhotoReviewPage } from '../app/irightsapp/containers/Photo-Research';
import { ThirdPartyLogPageNew,ThirdPartyPreClearancePageNew,QualityAssurancePageNew,DetermineAndConfirmPageNew,TextClearancePageNew,MSPLApproval,MSCustomerApproval} from '../app/irightsapp/v2/containers/Text-Research';
import { PhotoPreClearancePageNew,PhotoResearchPageNew,PhotoQAPageNew, PhotoPLApproval, PhotoCustomerApprovalNew, PhotoCustomerSelectionNew, PhotoPLReviewPageNew, PhotoCusReviewPageNew} from '../app/irightsapp/v2/containers/Photo-Research';
import { HiResResearcher,HiResPLApproval,HiResCustomerApproval} from '../app/irightsapp/v2/containers/Hi-Res';
import { ClearanceResearch,ClearanceCustomerApproval,ClearancePlApproval} from '../app/irightsapp/v2/containers/Clearance-Workflow';
import { PRUpdate,PRPLApproval} from '../app/irightsapp/v2/containers/Page-Review';



import PageReview from '../app/irightsapp/components/Page_Reviewer/Page_Reviewer';
import PageReviewNew from '../app/irightsapp/v2/components/Page_Reviewer/Page_Reviewer';
import Clearence from '../app/irightsapp/v2/components/Clearance/clearance';
import PageReport from '../app/irightsapp/components/Admin_Report/Admin_Report';
import Search from '../app/irightsapp/components/Search_Filter/Search_filter';
import UserManagement from '../app/irightsapp/components/User_Admin/User';
import WorkflowConfiguration from '../app/irightsapp/components/Work_Admin/Work';
import CustomerConfiguration from '../app/irightsapp/components/Customer_Admin/Customer';
import WorkInprogress from '../app/irightsapp/components/Data-Files/Data_files';
import VendorBreakdown from '../app/irightsapp/components/Vendor_Breakdown/Vendor_Breakdown';
import ProjectsCompleted from '../app/irightsapp/components/Data-Completed/Data_completed';

//Log Reports
import LogReport from '../components/Log-Report/Log_file';
import MasterReport from '../components/Dynamic_Master/Dynamic_master_file';

import StatusReport from '../app/irightsapp/components/Status_Report/StatusReport';

//query
import QueryReport from '../components/Query/Query';


//iJPS Components
import Dashboard_IOPP from '../app/ijpsapp/components/Dashboad-IOPP/Dashboard';
import JournalPage from '../app/ijpsapp/containers/Journals/Journal-Page';
import IOPP_Profile from '../app/ijpsapp/components/IOPP-profile/profile-iopp';
import Dashboard_Author from '../app/ijpsapp/components/Dashboad-Author/Dashboard-author';
import Dashboard_Reviewer from '../app/ijpsapp/components/Dashboad-Reviewer/Dashboard-reviewer';
import Dashboard_Integra from '../app/ijpsapp/components/Dashboad-Inter/Dashboard-Integra';

//iopp
import ActivityStream from '../components/Activity_Stream/Activity_Stream';

// tandfapp
import Proceeding_List from '../app/ijpsapp/components/Proceeding-List/Proceeding-List';
import Dashboard_TFNL from '../app/ijpsapp/components/Dashboard-TandF/Dashboard_TF';

//Admin Create Job
import Dashboard_SW from '../app/ibpsapp/components/Dashboard_SW/Dashboard_SW';
import CreateJob from '../app/ibpsapp/components/Admin_Create_Job/Admin_Create_Job';
import DashboardCUP from '../app/ibpsapp/components/Dashboard_CUP/Dashboard_CUP';

//common dashboard journal
import DashboardJournal from '../app/ijpsapp/components/Dashboard-Journal/Dashboard_Journal';

import BMJdashboard from '../app/ijpsapp/components/BMJdashboard/BMJdashboard';
import BookList from '../app/ibpsapp/components/BookList/booklist';
import BookInfo from '../app/ibpsapp/components/BookList/bookinfo';
import Rightholders from '../app/irightsapp/components/AdminModules/RightsholderManagement';
import CustomerDivision from '../app/irightsapp/components/AdminModules/CustomerdivisionManagement';
import IRightsRoles from '../app/irightsapp/components/AdminModules/IRightsRoles';
import CustomizeReport from '../app/irightsapp/v2/components/PageReviewTelerik/CustomizeReport';
import NPSReport from '../app/ijpsapp/components/NPS-Report/NPSReport';
import UserSurveyReport from '../app/ijpsapp/components/ioppReport/usersurveyreport';
import UserSurveyReport_New from '../app/ijpsapp/components/Usersurvey-Report/UsersurveyReport';
import Dashboard_aves from '../app/ijpsapp/components/Dashboard-Aves/Dashboard_aves';
import NPSReportBook_New from '../app/ibpsapp/components/NPS-ReportBook/NPSReportBook';
import UserSurveyReportBook_New from '../app/ibpsapp/components/Usersurvey-ReportBook/UsersurveyReportBook';
import Dashboard_iopp_articles from '../app/ijpsapp/components/Dashboard-Iopp-article/Dashboard_iopp_article';
export const iP_COMPONENTS = [
  {
    "name": "CreateProjectPage",
    "value": CreateProjectPage,
    "icon": "create"
  },
  {
    "name": "UpdateProjectPage",
    "value": UpdateProjectPage,
    "icon": "create"
  },
  {
    "name": "UserAccessPage",
    "value": UserAccessPage,
    "icon": "dashboard"
  },
  {
    "name": "ProjectList",
    "value": ProjectList,
    "icon": "view_list"
  },
  {
    "name": "Taskcreation",
    "value": TaskCreation,
    "icon": "label"
  },
  {
    "name": "TaskCreationNew",
    "value": TaskCreationNew,
    "icon": "label"
  },
  {
    "name": "PhotoPreClearancePage",
    "value": PhotoPreClearancePage,
    "icon": "image"
  },
  {
    "name": "PhotoPreClearancePageNew",
    "value": PhotoPreClearancePageNew,
    "icon": "image"
  },
  {
    "name": "AssetRsearch",
    "value": PhotoResearchPage,
    "icon": "image"
  },
  {
    "name": "AssetRsearchNew",
    "value": PhotoResearchPageNew,
    "icon": "image"
  },
  {
    "name": "QualityAssurance",
    "value": PhotoQAPage,
    "icon": "thumb_up"
  },
  {
    "name": "QualityAssuranceNew",
    "value": PhotoQAPageNew,
    "icon": "thumb_up"
  },
  {
    "name": "ThirdPartyLogPage",
    "value": ThirdPartyLogPage,
    "icon": "text_fields"
  },
  {
    "name": "ThirdPartyLogPageNew",
    "value": ThirdPartyLogPageNew,
    "icon": "text_fields"
  },
  {
    "name": "ThirdPartyPreClearancePage",
    "value": ThirdPartyPreClearancePage,
    "icon": "text_fields"
  },
  {
    "name": "ThirdPartyPreClearancePageNew",
    "value": ThirdPartyPreClearancePageNew,
    "icon": "text_fields"
  },
  {
    "name": "QualityAssurancePage",
    "value": QualityAssurancePage,
    "icon": "equalizer"
  },
  {
    "name": "QualityAssurancePageNew",
    "value": QualityAssurancePageNew,
    "icon": "equalizer"
  },
  {
    "name": "DetermineAndConfirmPage",
    "value": DetermineAndConfirmPage,
    "icon": "dashboard"
  },
  {
    "name": "DetermineAndConfirmPageNew",
    "value": DetermineAndConfirmPageNew,
    "icon": "dashboard"
  },
  {
    "name": "ThirdPartyPLPage",
    "value": ThirdPartyPLPage,
    "icon": "security"
  },
  {
    "name": "ThirdPartyCustomerPage",
    "value": ThirdPartyCustomerPage,
    "icon": "dashboard"
  },
  {
    "name": "HiResResearcher",
    "value": HiResResearcher,
    "icon": "text_fields"
  },
  {
    "name": "ClearanceResearch",
    "value": ClearanceResearch,
    "icon": "text_fields"
  },
  {
    "name": "ClearancePlApproval",
    "value": ClearancePlApproval,
    "icon": "text_fields"
  },{
    "name": "ClearanceCustomerApproval",
    "value": ClearanceCustomerApproval,
    "icon": "text_fields"
  },
  {
    "name": "TextClearancePage",
    "value": TextClearancePage,
    "icon": "directions"
  },
  {
    "name": "TextClearancePageNew",
    "value": TextClearancePageNew,
    "icon": "directions"
  },
  {
    "name": "TextClearanceCustomerPage",
    "value": TextClearanceCustomerPage,
    "icon": "dashboard"
  },
  {
    "name": "Taskallocation",
    "value": Taskallocation,
    "icon": "send"
  },
  {
    "name": "Gantt",
    "value": Gantt,
    "icon": "schedule"
  },
  {
    "name": "CustomerSelection",
    "value": PhotoCustomerSelectionPage,
    "icon": "tab_unselected"
  },
  {
    "name": "CustomerApprover",
    "value": PhotoCustomerApproverPage,
    "icon": "done_all"
  },

  {
    "name": "CustomerSelectionNew",
    "value": PhotoCustomerSelectionNew,
    "icon": "tab_unselected"
  },
  {
    "name": "CustomerApproverNew",
    "value": PhotoCustomerApprovalNew,
    "icon": "done_all"
  },
  {
    "name": "CustomerReview",
    "value": PhotoCustomerReviewPage,
    "icon": "rate_review"
  },
  {
    "name": "PhotoPLReviewPageNew",
    "value": PhotoPLReviewPageNew,
    "icon": "rate_review"
  },
  {
    "name": "PhotoCusReviewPageNew",
    "value": PhotoCusReviewPageNew,
    "icon": "rate_review"
  },
  {
    "name": "PR_Clearance",
    "value": PR_Clearance,
    "icon": "clear_all"
  },
  {
    "name": "PR_ClearanceNew",
    "value": PR_ClearanceNew,
    "icon": "clear_all"
  },
  {
    "name": "Clearence",
    "value": Clearence,
    "icon": "clear_all"
  },
  {
    "name": "Clearance_Approval",
    "value": Clearence,
    "icon": "clear_all"
  },
  {
    "name": "Project_Lead",
    "value": PhotoPLPage,
    "icon": "image"
  },
  {
    "name": "PLApprovalNew",
    "value": PhotoPLApproval,
    "icon": "image"
    
  },
  {
    "name": "Dashboard_PL",
    "value": Dashboard_PL,
    "icon": "dashboard"
  },
  {
    "name": "Dashboard_PR",
    "value": Dashboard_PR,
    "icon": "dashboard"
  },
  {
    "name": "Dashboard_TR",
    "value": Dashboard_TR,
    "icon": "dashboard"
  },
  {
    "name": "Dashboard_PR_TL",
    "value": Dashboard_PR_TL,
    "icon": "dashboard"
  },
  {
    "name": "Dashboard_TR_TL",
    "value": Dashboard_TR_TL,
    "icon": "dashboard"
  },
  {
    "name": "Dashboard_Customer",
    "value": Dashboard_Customer,
    "icon": "dashboard"
  },
  {
    "name": "TextApprovalPLPage",
    "value": TextApprovalPLPage,
    "icon": "security"
  },
  {
    "name": "PhotoClearancePLPage",
    "value": PhotoClearanceApprovalPage,
    "icon": "security"
  },
  {
    "name": "PhotoClearanceReviewerPage",
    "value": PhotoClearanceReviewerPage,
    "icon": "photo"
  },
  {
    "name": "Dashboard_IOPP",
    "value": Dashboard_IOPP,
    "icon": "dashboard"
  },
  {
    "name": "Dashboard_Author",
    "value": Dashboard_Author,
    "icon": "dashboard"
  },
  {
    "name": "Dashboard_Reviewer",
    "value": Dashboard_Reviewer,
    "icon": "dashboard"
  },
  {
    "name": "Dashboard_Integra",
    "value": Dashboard_Integra,
    "icon": "dashboard"
  },
  {
    "name": "SubmitManuscript",
    "value": JournalPage,
    "icon": "folder_shared"
  },
  {
    "name": "Proceeding_List",
    "value": Proceeding_List,
    "icon": "list"
  },
  {
    "name": "Dashboard_TFNL",
    "value": Dashboard_TFNL,
    "icon": "dashboard"
  },
  {
    "name": "PageReview",
    "value": PageReview,
    "icon": "menu_icon"
  },
  {
    "name": "PageReviewNew",
    "value": PageReviewNew,
    "icon": "menu_icon"
  },
  {
    "name": "Dashboard_SW",
    "value": Dashboard_SW,
    "icon": "dashboard"
  },
  {
    "name": "CreateJob",
    "value": CreateJob,
    "icon": "dashboard"
  },
  {
    "name": "PageReport",
    "value": PageReport,
    "icon": "menu_icon"
  },
  {
    "name": "Search",
    "value": Search,
    "icon": "search"
  },
  {
    "name": "UserManagement",
    "value": UserManagement,
    "icon": "group"
  },
  {
    "name": "WorkflowConfiguration",
    "value": WorkflowConfiguration,
    "icon": "work"
  },
  {
    "name": "CustomerConfiguration",
    "value": CustomerConfiguration,
    "icon": "person"
  },
  {
    "name": "WorkInprogress",
    "value": WorkInprogress,
    "icon": "report"
  },
  {
    "name": "VendorBreakdown",
    "value": VendorBreakdown,
    "icon": "person"
  },
  {
    "name": "ProjectsCompleted",
    "value": ProjectsCompleted,
    "icon": "check_circle"
  },
  {
    "name": "ActivityStream",
    "value": ActivityStream,
    "icon": "dashboard"
  },
  {
    "name": "",
    "value": '',
    "group": 'Photo',
    "icon": "insert_photo"
  },
  {
    "name": "",
    "value": '',
    "group": 'Text',
    "icon": "text_fields"
  },
  {
    "name": "",
    "value": '',
    "group": 'HiRes',
    "icon": "dashboard"
  },
  {
    "name": "",
    "value": '',
    "group": 'Dashboard',
    "icon": "dashboard"
  },
  {
    "name": "",
    "value": '',
    "group": 'Clearance',
    "icon": "dashboard"
  },
  {
    "name": "",
    "value": '',
    "group": 'PageReview',
    "icon": "dashboard"
  },
  {
    "name": "",
    "value": '',
    "group": 'Reports',
    "icon": "report"
  },
  {
    "name": "",
    "value": '',
    "group": 'Admin',
    "icon": "person"
  },
  {
    "name": "LogReport",
    "value": LogReport,
    "icon": "assignment"
  },
  {
    "name": "MasterReport",
    "value": MasterReport,
    "icon": "assignment_ind"
  },
  {
    "name": "QueryReport",
    "value": QueryReport,
    "icon": "sms"
  },
  {
    "name": "StatusReport",
    "value": StatusReport,
    "icon": "report"
  },
  {
    "name": "DashboardCUP",
    "value": DashboardCUP,
    "icon": "dashboard"
  },
  {
    "name": "DashboardJournal",
    "value": DashboardJournal,
    "icon": "dashboard"
  },
  {
    "name": "BMJdashboard",
    "value": BMJdashboard,
    "icon": "dashboard"
  },
  {
    "name":"Dashboard Aves",
    "value":Dashboard_aves,
    "icon":"dashboard"
  },
  {
    "name": "BookList",
    "value": BookList,
    "icon": "view_list"
  },
  {
    "name": "BookInfo",
    "value": BookInfo,
    "icon": "view_list"
  },
  {
    "name": "Rightholders",
    "value": Rightholders,
    "icon": "group"
  },
  {
    "name": "CustomerDivision",
    "value": CustomerDivision,
    "icon": "group"
  },
  {
    "name": "IRightsRoles",
    "value": IRightsRoles,
    "icon": "group"
  },
  {
    "name": "CustomizeReport",
    "value": CustomizeReport,
    "icon": "group"
  },
  {
    "name": "HiResPLApproval",
    "value": HiResPLApproval,
    "icon": "group"
  },
  {
    "name": "HiResCustomerApproval",
    "value": HiResCustomerApproval,
    "icon": "group"
  },
  {
    "name": "NPSReport",
    "value": NPSReport,
    "icon": "dashboard"
  },
  {
    "name": "UserSurvey",
    "value": UserSurveyReport_New,
    "icon": "dashboard"
  }
  ,  {
    "name": "MSPLApproval",
    "value": MSPLApproval,
    "icon": "group"
  },  {
    "name": "MSCustomerApproval",
    "value": MSCustomerApproval,
    "icon": "group"
  },
  {
    "name": "PRPLApproval",
    "value": PRPLApproval,
    "icon": "group"
  },  {
    "name": "PRUpdate",
    "value": PRUpdate,
    "icon": "group"
  },
  {
    "name": "NPSReportBook",
    "value": NPSReportBook_New,
    "icon": "dashboard"
  },
  {
    "name": "UserSurveyBook",
    "value": UserSurveyReportBook_New,
    "icon": "dashboard"
  },
  {
    "name": "Dashboard Iopp Articles",
    "value": Dashboard_iopp_articles,
    "icon": "dashboard"
  },
];