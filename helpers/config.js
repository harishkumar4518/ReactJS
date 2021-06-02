const API_config = require('./api_config.json')
const PACKAGE = require('../../package.json');

export const CONFIG = {

	API_BASE_URL: API_config[PACKAGE.environment]["API_BASE_URL"],
	iAuthor_Base_URL: API_config[PACKAGE.environment]["iAuthor_Base_URL"],
	initializeIAuthor: API_config[PACKAGE.environment]["initializeIAuthor"],
	XmlToBits: API_config[PACKAGE.environment]["XmlToBits"],
	Cengage_ERV_Xml:API_config[PACKAGE.environment]["Cengage_ERV_Xml"],

	IS_SOCKET_CONNECTION_ON: true,
	IS_INTERVEL_TIME: 10000,
	Init: "/init",
	Login: "/login",
	WIP_List: "/irs/get-project-list",
	GetProjectPlList: "/irs/get-project-pl-list",
	GetProjectlistforRev: "/irs/Get-project-List-For-Reviewer",
	GetProjectlistforRevPhotoText: "/irs/get-project-list-for-reviewer-photo-text",
	Get_All_Chapters: "/irs/get-all-chapters",
	Get_WIP_Chapters: "/irs/get-all-wip-chapters",
	Get_Chapter: "/irs/get-chapter",

	Get_Project_Details: "/irs/get-project",
	CreatePoject: "/irs/create-project",
	GetProjectModeOfReceipts: "/irs/get-project-modeofreceipts",
	GetProjectRoletypes: "/irs/get-project-roletypes",
	GetProjectServices: "/irs/get-project-services",
	GetCustomerLocation: "/irs/get-customer-location",
	GetCustomerCategory: "/irs/get-customer-category",
	GetCustomerSubcategory: "/irs/get-customer-subcategory",
	GetCustomerCurrency: "/irs/get-customer-currency",
	ProjectUploads: "/irs/project-uploads",
	ServiceUploads: "/irs/service-uploads",
	Get_Customer_Email: "/irs/customer-email-check",

	Get_Task_Allocation: "/irs/get-tasks",
	Post_Task_Allocation: "/irs/post-tasks",
	Get_Userlist: "/irs/get-users",
	Get_Role: "/irs/get-roles",
	Get_ResearchType: "/irs/get-research-type",
	Get_Activity: "/irs/get-allactivities",
	Get_User_Access_Data: "/irs/get-user-access-data",
	Get_Research_Type_Customer: "/irs/get-sub-roles-type",
	Get_User_Access_Rights: "/irs/get-user-access",
	Get_Model_Release: "/irs/get-model-release",
	Get_Property_Release: "/irs/get-property-release",
	Get_Additional_Right_Required: "/irs/get-add-rights-req",
	Get_Attach_type: "/irs/get-attachment-type",

	Resource_Name: "/irs/get-resource-name",
	Resource_Name_Activity: "/irs/get-resource-name-on-activity",
	Update_Task: "/irs/update-task",
	Update_Chpter_page: "/irs/update-chapter-page",
	getProjectleads: "/irs/get-projectlead",
	getCustomers: "/irs/get-customer",

	Forgot_Password: "/forgot-password",
	Change_Password: "/change-password",
	Photo_Research_Details: "/irs/get-asset-details",

	Task_File_Upload: "/irs/task-uploads",
	Text_Pending_Task: "/irs/text-pending-task",
	Text_Pending_Task_Details: "/irs/text-pending-task-details",
	Get_Spec_clearance_Details: "/irs/get-spec-clearance-details",

	Third_Party_Approval: "/irs/third-party-approval",
	Third_Party_Approval_Details: "/irs/third-party-approval-details",

	Get_Project_Creation_Details: "/irs/get-create-project-details",
	Upload_spec_details: "/irs/update-asset-details",
	Get_Spec_List: "/irs/get-spec-list",
	Get_Reviewer_Spec_List: "/irs/get-spec-list-reviewer",
	Get_Spec_Details: "/irs/get-spec-details",
	Update_Spec: "/irs/update-spec-details",
	ProjectCompletion: "/irs/v2/project-completion",
	Update_Customer_Selection: "/irs/update-customer-selection",
	Approve_Customer_Selection: "/irs/approve-customer-selection",
	Reject_Customer_Selection: "/irs/reject-customer-selection",
	Post_User_Access: "/irs/update-user-access",
	Create_New_User: "/irs/create-user",
	UpdateSpecSts: "/irs/spec-status-update",

	Create_Rights_Holder: "/irs/create-rights-holder",
	Get_Rights_Holder: "/irs/get-rights-holders",
	Get_Rights_Holder_Details: "/irs/get-rights-holder-details",
	Map_Rights_Holder_Task: "/irs/map-rights-holder",
	Spec_File_Upload: "/irs/spec-uploads",

	Reject_Activity: "/irs/reject-activity",
	Start_Activity: "/irs/start-activity",
	Cancel_Activity: "/irs/cancel-activity",
	Pending_Activity: "/irs/pending-activity",
	Submit_Activity: "/irs/submit-activity",

	Get_Rights_Type_Details: "/irs/get-rights-type",
	Get_Image_Type_Details: "/irs/get-image-type",
	Get_Source_Type_Details: "/irs/get-image-src",

	Get_Text_Chapter_List: "/irs/get-text-list",
	Get_Permission_Status: "/irs/get-permission-status",
	Get_Permission_Needed: "/irs/get-permission-needed",
	Get_Selection_List: "/irs/get-selection-list",
	Get_Clearance_Selection_List: "/irs/get-clearance-selection-list",
	Get_Selection_Details: "/irs/get-selection-details",
	Text_Add_Edit_Selection: "/irs/update-selection",
	GetProjectSelections: "/irs/get-project-selections",
	GetProjectSelectionsFull: "/irs/get-project-selections-full",
	GetSelectionRightsHolder: "/irs/get-selection-rights-holder",
	Get_Reject_Reason: "/irs/get-reject-reason",
	GetProjectSelectionsReview: "/irs/get-project-selections-review",

	Get_Specfd_as: "/irs/specifiedas",
	Get_Element_Type: "/irs/elementtype",
	Get_Usage: "/irs/usage",
	Get_Rights: "/irs/elemrights",
	AddEdit_Element_Log: "/irs/element-log/addedit",
	Rights_Holder_validation: "/irs/rights_holder_validation",

	Get_User_Menu: "/irs/user-menu",
	Get_Process_Details: "/irs/get-process-detail",
	Logout: "/logout",

	GetRightsHolderFollowup: "/irs/get-rights-holder-followup",
	UpdateRightsHolderFollowup: "/irs/update-rights-holder-followup",
	GetClearanceStatus: "/irs/get-clearance-status",
	UpdateHighresStatus: "/irs/update-highres-status",
	GetClearanceReviewerSpecList: "/irs/get-spec-list-clearance-reviewer",
	SEND_MAIL: "/irs/send-mail",

	GET_Chapter_TaskID: "/irs/get-chapter-taskid",

	GetDashBoard_R: "/irs/get-activity-status-r",
	GetDashBoard_R_OnTrack: "/irs/get-activity-status-ontrack-r",
	GetDashBoard_R_Delay: "/irs/get-activity-status-delay-r",

	GetDashBoard_PR_Primary: "/irs/get-primary-status-pr",
	GetDashBoard_PR_Clearance: "/irs/get-task-clearance-pr",
	GetDashBoard_PR_Clearance_OnTrack: "/irs/get-task-clearance-ontrack-pr",
	GetDashBoard_PR_Clearance_Delay: "/irs/get-task-clearance-delay-pr",

	GetDashBoard_TR_Primary: "/irs/get-primary-status-tr",
	GetDashBoard_TR_Clearance: "/irs/get-task-clearance-tr",

	GetDashBoard_Report_R: "/irs/get-activity-status-report-r",
	GetDashBoard_Report_R_OnTrack: "/irs/get-activity-status-report-ontrack-r",
	GetDashBoard_Report_R_Delay: "/irs/get-activity-status-report-delay-r",

	GetDashBoard_PL_Primary: "/irs/get-primary-status-pl",

	GetDashBoard_PL: "/irs/get-activity-status-pl",
	GetDashBoard_PL_OnTrack: "/irs/get-activity-status-ontrack-pl",
	GetDashBoard_PL_Delay: "/irs/get-activity-status-delay-pl",

	GetDashBoard_Clearance_PL: "/irs/get-activity-status-clearance-pl",
	GetDashBoard_Clearance_PL_Delay: "/irs/get-activity-status-clearance-pl-delay",
	GetDashBoard_Clearance_PL_OnTrack: "/irs/get-activity-status-clearance-pl-ontrack",

	GetDashBoard_Clearance_R: "/irs/get-activity-status-clearance-r",
	GetDashBoard_Clearance_R_Delay: "/irs/get-activity-status-clearance-r-delay",
	GetDashBoard_Clearance_R_OnTrack: "/irs/get-activity-status-clearance-r-ontrack",

	Get_Activity_Status_Report_PL: "/irs/get-activity-status-report-pl",
	Get_Activity_Status_Report_PL_Delay: "/irs/get-activity-status-delay-report-pl",
	Get_Activity_Status_Report_PL_OnTrack: "/irs/get-activity-status-ontrack-report-pl",

	GetDashBoard_TR_Clearance_OnTrack: "/irs/get-task-clearance-ontrack-tr",
	GetDashBoard_TR_Clearance_Delay: "/irs/get-task-clearance-delay-tr",
	GetRightsHolderFollowupValidation: "/irs/get-rh-followup-validation",
	GetRightsHolderFollowupValidationPhoto: "/irs/get-rh-followup-validation-photo",
	DeleteRightsHolderFollowUp: "/irs/task/right-holder/inactive",

	// Dashboard Customer
	GetDashBoard_CUS_Primary: "/irs/get-primary-status-c",
	GetDashBoard_CUS_PR: "/irs/get-activity-status-customer-photo",
	GetDashBoard_CUS_PR_OnTrack: "/irs/get-activity-status-customer-photo-ontrack",
	GetDashBoard_CUS_PR_Delay: "/irs/get-activity-status-customer-photo-delay",
	GetDashBoard_CUS_TR: "/irs/get-activity-status-customer-text",
	GetDashBoard_CUS_TR_OnTrack: "/irs/get-activity-status-customer-text-ontrack",
	GetDashBoard_CUS_TR_Delay: "/irs/get-activity-status-customer-text-delay",

	GetDashBoard_CUS_Clearance_PR: "/irs/get-task-clearance-c-pr",
	GetDashBoard_CUS_Clearance_PR_OnTrack: "/irs/get-task-clearance-ontrack-c-pr",
	GetDashBoard_CUS_Clearance_PR_Delay: "/irs/get-task-clearance-delay-c-pr",
	GetDashBoard_CUS_Clearance_TR: "/irs/get-task-clearance-c-tr",
	GetDashBoard_CUS_Clearance_TR_OnTrack: "/irs/get-task-clearance-ontrack-c-tr",
	GetDashBoard_CUS_Clearance_TR_Delay: "/irs/get-task-clearance-delay-c-tr",

	GetDashBoard_CUS_Report: "/irs/get-activity-status-report-c",
	GetDashBoard_CUS_Report_OnTrack: "/irs/get-activity-status-ontrack-report-c",
	GetDashBoard_CUS_Report_Delay: "/irs/get-activity-status-delay-report-c",
	Update_pending_tasks: "/irs/put-pending-for-user",

	Get_Spec_details_export: "/irs/get-spec-details-export",
	GetLoadIndicator: "/irs/get-load-indicator",
	Get_Photo_Clearance_export: "/irs/get-clearance-spec-export",
	Get_Selection_details_export: "/irs/get-selection-details-export",
	Task_Creation_Add_Edit: "/irs/task-creation/addedit",
	Get_Clearance_Selection_details_export: "/irs/get-clearance-selection-details-export",
	ComposeEmail: "/irs/send-mail-follow-up",
	ComposeEmailDetails: "/irs/get-follow-up-mail-template",
	GetPageReviewProjectList: "/irs/get-project-list-page-review",
	UpdatePageReview: "/irs/update-page-review",
	GetProjectPageReview: "/irs/get-project-page-review",

	//create user_detail customer_detail service_workflow detail
	CreateUserDetail: "/irs/create-user-details",
	CreateCustomerDetail: "/irs/create-customer-details",
	CreateServiceDetail: "/irs/create-service-details",
	GetUserRoletypes: "/irs/get-user-role-type",
	GetUserSubRoletypes: "/irs/get-user-sub-role-type",
	GetUserAtytypes: "/irs/get-user-aty-type",
	GetUserOrgtypes: "/irs/get-user-org-type",
	GetUserOrgDivtypes: "/irs/get-user-org-div-type",
	GetUserCusttypes: "/irs/get-user-cust-type",
	GetUserReportingtypes: "/irs/get-user-reporting-type",
	GetUserData: "/irs/get-user-data",
	GetCustOrgtypes: "/irs/get-cust-org-type",
	GetCustComptypes: "/irs/get-cust-comp-type",
	GetCustomerData: "/irs/get-customer-data",
	GetServiceOrgtypes: "/irs/get-service-org-type",
	GetServiceComptypes: "/irs/get-service-comp-type",
	GetServiceData: "/irs/get-service-data",
	DeleteServiceWorkflowDetail: "/irs/delete-service-data",
	DeleteUserDetail: "/irs/delete-user-data",
	DeleteCustomerDetail: "/irs/delete-customer-data",

	//Search 
	SEARCH_GET_TEXT: "/irs/search/get-text",
	SEARCH_GET_IMAGE: "/irs/search/get-photo",
	GET_SOURCE_NAMES: "/irs/sourcename",
	GET_PHOTOGRAPHER_NAMES: "/irs/photographername",

	//Validate uploads
	ValidateUploads: "/irs/validate-uploads",

	//Admin Report
	GetAdminReport: "/irs/get-project-admin",
	GetAdminReportList: "/irs/get-project-list-admin",

	//Log Report
	ApiLogReport: "/getuserapilog",
	DbLogReport: "/getusersyslog",

	//Query 
	QueryReport: "/query-report",

	//Activity Stream
	GET_CUSTOMER_NAME: "/get-all-customer",
	GET_JOURNAL: "/get-all-journal",
	UPLOAD_FILES_TO_BLOB: "/upload-files-to-blob",
	DOWNLOAD_FILES_FROM_BLOB: "/download-files-from-blob",
	GET_ALL_ARTICLE: "/get-all-article",
	GET_ALL_BOOK: "/get-all-book",
	GET_ALL_ACTIVITY: "/get-all-activity",
	GET_DASHBOARD_DATA_STREAM: "/get-dashboard-data-stream",

	GET_MODULE_DATA: "/get-module-data",
	GET_MODULE_DATA_V2: "/get-module-data-v2",

	//Cengage 
	Create_Cengage_XML: "/irs/create-cengage-xml",
	Import_ERV_XML: "/irs/import-erv-xml",

	Update_Spec_Others: "/irs/update-spec-details-others",
	Update_Selection_Others: "/irs/update-selection-others",

	//State and City
	GetState: '/irs/get-state',
	GetCities: '/irs/get-cities',

	GET_DASHBOARD_DATA_HISTORY: "/get-dashboard-data-history",
	AddEdit_Import_Log: "/irs/task-creation/importlog",
	GetClearanceReviewerSpecListByChapters: "/irs/get-activity-task-lists-for-chapters",
	//otp
	otp_validate: "/ijps/otpvalidate",
	//OTP Trigger end point"
	OtpTrigger: "/ijps/OTPEmailTrigger",
	//OTP Request Access
	Otp_Request_Access:"/ijps/otp-request-access",

	//Delete Custtomer Division
	Delete_Customer_Division:'/irs/delete-vertical-customer',
	Get_Customer_Details:'/irs/get_Customer_Details',
	Get_Division_Notification : '/irs/get_Division_Notification',
	Update_Status : '/irs/update_Status',
	Get_Division_For_Customer: '/irs/get-vertical-dtl',
	Get_Division_By_Customer: '/irs/get-division-by-customer',


	Delete_Division_Data : '/irs/delete-division-data',
	Get_Cust_Division_Notification : 'irs/get-Cust-Division-Notification',

	Create_Custom_Division: "/irs/create-edit-vertical",
	Create_Custom_SubDivision: "/irs/create-edit-subdivision",
	Delete_Sub_Division_Data : '/irs/delete-subdivision-data',
	Get_Sub_Division_Data : '/irs/get-subdivision-dtl'
};
