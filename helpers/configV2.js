const API_config = require('./api_config.json')
const PACKAGE = require('../../package.json');

export const CONFIGV2 = {

	API_BASE_URL: API_config[PACKAGE.environment]["API_BASE_URL"],
	iAuthor_Base_URL: API_config[PACKAGE.environment]["iAuthor_Base_URL"],
	initializeIAuthor: API_config[PACKAGE.environment]["initializeIAuthor"],
	XmlToBits: API_config[PACKAGE.environment]["XmlToBits"],
	Cengage_ERV_Xml:API_config[PACKAGE.environment]["Cengage_ERV_Xml"],
	iRightsHostname:API_config[PACKAGE.environment]["iRightshostname"],

	IS_SOCKET_CONNECTION_ON: true,
	IS_INTERVEL_TIME: 10000,
	Init: "/init",
	Login: "/login",
	WIP_List: "/irs/v2/get-project-list",
	GetProjectPlList: "/irs/v2/get-project-pl-list",
	GetProjectlistforRev: "/irs/v2/Get-project-List-For-Reviewer",
	GetProjectlistforRevPhotoText: "/irs/v2/get-project-list-for-reviewer-photo-text",
	GetProjectlistforResearcher: "/irs/v2/get-project-list-for-researcher",
	Get_All_Chapters: "/irs/v2/get-all-chapters",
	Get_WIP_Chapters: "/irs/v2/get-all-wip-chapters",
	Get_Chapters_Researcher: "/irs/v2/get-all-chapters-researcher",
	Get_Chapter: "/irs/v2/get-chapter",
	Get_Spec_details_export_v2: "/irs/v2/get-spec-details-export-researcher",

	Get_Project_Details: "/irs/v2/get-project",
	CreatePoject: "/irs/v2/create-project",
	GetProjectModeOfReceipts: "/irs/v2/get-project-modeofreceipts",
	GetProjectRoletypes: "/irs/v2/get-project-roletypes",
	GetProjectServices: "/irs/v2/get-project-services",
	GetCustomerLocation: "/irs/v2/get-customer-location",
	GetCustomerCategory: "/irs/v2/get-customer-category",
	GetCustomerSubcategory: "/irs/v2/get-customer-subcategory",
	GetCustomerCurrency: "/irs/v2/get-customer-currency",
	ProjectUploads: "/irs/v2/project-uploads",
	ClrFileUploads: "/irs/v2/clr-project-uploads",
	ServiceUploads: "/irs/v2/service-uploads",
	Get_Customer_Email: "/irs/v2/customer-email-check",

	Get_Task_Allocation: "/irs/v2/get-tasks",
	Post_Task_Allocation: "/irs/v2/post-tasks",
	Get_Userlist: "/irs/v2/get-users",
	Get_Role: "/irs/v2/get-roles",
	Get_ResearchType: "/irs/v2/get-research-type",
	Get_Activity: "/irs/v2/get-allactivities",
	Get_User_Access_Data: "/irs/v2/get-user-access-data",
	Get_Research_Type_Customer: "/irs/v2/get-sub-roles-type",
	Get_User_Access_Rights: "/irs/v2/get-user-access",
	Get_Model_Release: "/irs/v2/get-model-release",
	Get_Property_Release: "/irs/v2/get-property-release",
	Get_Additional_Right_Required: "/irs/v2/get-add-rights-req",
	Get_Attach_type: "/irs/v2/get-attachment-type",

	Resource_Name: "/irs/v2/get-resource-name",
	Resource_Name_Activity: "/irs/v2/get-resource-name-on-activity",
	Update_Task: "/irs/v2/update-task",
	Update_Chpter_page: "/irs/v2/update-chapter-page",
	getProjectleads: "/irs/v2/get-projectlead",
	getCustomers: "/irs/v2/get-customer",

	Forgot_Password: "/forgot-password",
	Change_Password: "/change-password",
	Photo_Research_Details: "/irs/v2/get-asset-details",
	Get_Chapter_Blob_Data: "/irs/v2/get-chapter-blob-data",
	Get_Clearance_Blob_Data: "/irs/v2/get-clearance-blob-data",

	Task_File_Upload: "/irs/v2/task-uploads",
	Text_Pending_Task: "/irs/v2/text-pending-task",
	Text_Pending_Task_Details: "/irs/v2/text-pending-task-details",
	Get_Spec_clearance_Details: "/irs/v2/get-spec-clearance-details",

	Third_Party_Approval: "/irs/v2/third-party-approval",
	Third_Party_Approval_Details: "/irs/v2/third-party-approval-details",

	Get_Project_Creation_Details: "/irs/v2/get-create-project-details",
	Upload_spec_details: "/irs/v2/update-asset-details",
	Get_Spec_List: "/irs/v2/get-spec-list",
	Get_Reviewer_Spec_List: "/irs/v2/get-spec-list-reviewer",
	Get_Spec_Details: "/irs/v2/get-spec-details",
	Update_Spec: "/irs/v2/update-spec-details",

	Update_Customer_Selection: "/irs/v2/update-customer-selection",
	Approve_Customer_Selection: "/irs/v2/approve-customer-selection",
	Reject_Customer_Selection: "/irs/v2/reject-customer-selection",
	Post_User_Access: "/irs/v2/update-user-access",
	Create_New_User: "/irs/v2/create-user",
	UpdateSpecSts: "/irs/v2/spec-status-update",

	Create_Rights_Holder: "/irs/v2/create-rights-holder",
	Get_Rights_Holder: "/irs/v2/get-rights-holders",
	Get_Rights_Holder_Details: "/irs/v2/get-rights-holder-details",
	Map_Rights_Holder_Task: "/irs/v2/map-rights-holder",
	Spec_File_Upload: "/irs/v2/spec-uploads",

	Reject_Activity: "/irs/v2/reject-activity",
	Start_Activity: "/irs/v2/start-activity",
	Cancel_Activity: "/irs/v2/cancel-activity",
	Pending_Activity: "/irs/v2/pending-activity",
	Submit_Activity: "/irs/v2/submit-activity",
	KillAsset:"/irs/v2/kill-asset-activity",
	Get_Rights_Type_Details: "/irs/v2/get-rights-type",
	Get_Image_Rejected_History: "/irs/v2/get-rejected-image-history",
	Get_Image_Type_Details: "/irs/v2/get-image-type",
	Get_Source_Type_Details: "/irs/v2/get-image-src",
	Add_Edit_Hires: "/irs/v2/add-edit-hires",
//start Asset-deals activity:
	StartAssetActivity:"/irs/v2/start-asset-activity",
	PendingAssetActivity:"/irs/v2/pending-asset-activity",
	StartDealsActivity:"/irs/v2/start-deal-activity",
	PendingDealActivity:"/irs/v2/pending-deal-activity",
	//submit Updateclearance
	SubmitDealActivity: "/irs/v2/deal-submit-activity",

	Get_Text_Chapter_List: "/irs/v2/get-text-list",
	Get_Validation_For_PageReview: "/irs/v2/get-validation-for-pagereview",
	Get_Permission_Status: "/irs/v2/get-permission-status",
	Get_Permission_Needed: "/irs/v2/get-permission-needed",
	Get_Selection_List: "/irs/v2/get-selection-list",
	Get_Clearance_Selection_List: "/irs/v2/get-clearance-selection-list",
	Get_Selection_Details: "/irs/v2/get-selection-details",
	Text_Add_Edit_Selection: "/irs/v2/update-selection",
	Photo_Asset_Add_Edit: "/irs/v2/update-selection-for-researcher",
	GetProjectSelections: "/irs/v2/get-project-selections",
	GetProjectSelectionsFull: "/irs/v2/get-project-selections-full",
	GetSelectionRightsHolder: "/irs/v2/get-selection-rights-holder",
	Get_Reject_Reason: "/irs/v2/get-reject-reason",
	GetProjectSelectionsReview: "/irs/v2/get-project-selections-review",
	Get_Asset_Details : "/irs/v2/get-asset-details",
	Get_Asset_List : "/irs/v2/get-asset-list",
	Get_Specfd_as: "/irs/v2/specifiedas",
	Get_Element_Type: "/irs/v2/elementtype",
	Get_Usage: "/irs/v2/usage",
	Get_Rights: "/irs/v2/elemrights",
	AddEdit_Element_Log: "/irs/v2/element-log/addedit",
	Rights_Holder_validation: "/irs/v2/rights_holder_validation",

	Get_User_Menu: "/irs/v2/user-menu",
	Get_Process_Details: "/irs/v2/get-process-detail",
	Get_Process_Details_With_Deals: "/irs/v2/get-process-detail-with-deals",
	Logout: "/logout",

	GetRightsHolderFollowup: "/irs/v2/get-rights-holder-followup",
	UpdateRightsHolderFollowup: "/irs/v2/update-rights-holder-followup",
	GetClearanceStatus: "/irs/v2/get-clearance-status",
	UpdateHighresStatus: "/irs/v2/update-highres-status",
	GetClearanceReviewerSpecList: "/irs/v2/get-spec-list-clearance-reviewer",
	SEND_MAIL: "/irs/v2/send-mail",

	GET_Chapter_TaskID: "/irs/v2/get-chapter-taskid",

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
	Update_pending_tasks: "/irs/v2/put-pending-for-user",
	// dashboard admin role config
	get_dashboard_for_roles: "/irs/v2/get-dashboard-for-roles",
	update_dashboard_for_roles: "/irs/v2/update-dashboard-for-roles",
	GetPageReviewReportData: "/irs/v2/get-page-review-report-data",
	Get_Spec_details_export: "/irs/v2/get-spec-details-export",
	GetLoadIndicator: "/irs/v2/get-load-indicator",
	Get_Photo_Clearance_export: "/irs/v2/get-clearance-spec-export",
	Get_Selection_details_export: "/irs/v2/get-spec-details-export-researcher",
	Task_Creation_Add_Edit: "/irs/v2/task-creation/addedit",
	Get_Clearance_Selection_details_export: "/irs/v2/get-clearance-selection-details-export",
	ComposeEmail: "/irs/v2/send-mail-follow-up",
	SendEmailFollowUp : "/irs/v2/send-email-follow-up",
	SendEmailHires : "/irs/v2/send-mail-hires",
	ComposeEmailDetails: "/irs/v2/get-follow-up-mail-template",
	GetPageReviewProjectList: "/irs/get-project-list-page-review",
	UpdatePageReview: "/irs/v2/update-page-review",
	GetProjectPageReview: "/irs/v2/get-page-review-report",
	ProjectCompletion: "/irs/v2/project-completion",
	GetProjectPageReviewExport: "/irs/v2/get-page-review-export-data",
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

	GetClearanceAssets:"/irs/v2/get-clearance-assets",

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

	//Cengage 
	Create_Cengage_XML: "/irs/v2/create-cengage-xml",
	Import_ERV_XML: "/irs/v2/import-erv-xml",
	Get_Customer_Env: "/irs/v2/get-customer-env",

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

	//new clearance mail 
	GetClearanceEmailTemplate : "/irs/v2/get-clr-email-template",
	CreateUpdateDeals : "/irs/v2/create-update-deals",
	getClearanceHistory: "/irs/v2/get-clearance-history",
	GetClearanceAssetsDetails:"/irs/v2//get-clearance-asset-details",
	GetHiresEmailTemplate : "/irs/v2/get-hires-email-template",
};
