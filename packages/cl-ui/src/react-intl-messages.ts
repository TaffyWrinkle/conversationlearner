/**
 * Copyright (c) Microsoft Corporation. All rights reserved.  
 * Licensed under the MIT License.
 */
export enum FM {
    ABOUT_TITLE = 'About.title',
    DOCS_TITLE = 'Docs.title',
    LOGIN_TITLE = 'Login.title',
    PROFILE_TITLE = 'Profile.title',
    PROFILE_NAME = 'Profile.name',
    PROFILE_SETTINGS_TITLE = 'Profile.settings.title',
    PROFILE_SETTINGS_SDKPORT = 'Profile.settings.sdkport',
    SUPPORT_TITLE = 'Support.title',
    NOMATCH_TITLE = 'NoMatch.title',
    NOMATCH_HOME = 'NoMatch.home',
    PAGE_COMINGSOON = 'page.comingsoon',

    // Actions
    ACTIONS_TITLE = 'Actions.title',
    ACTIONS_SUBTITLE = 'Actions.subtitle',
    ACTIONS_CREATEBUTTONARIADESCRIPTION = 'Actions.createButtonAriaDescription',
    ACTIONS_CREATEBUTTONTITLE = 'Actions.createButtonTitle',
    ACTIONS_CONFIRMCANCELMODALTITLE = 'Actions.confirmCancelModalTitle',

    // App
    APP_HEADER_MYAPPS = 'App.header.home',
    APP_HEADER_ABOUT = 'App.header.about',
    APP_HEADER_DOCS = 'App.header.docs',
    APP_HEADER_SUPPORT = 'App.header.support',

    // TrainingStatus
    APP_TRAINING_STATUS_STATUS = 'TrainingStatus.status.label',
    APP_TRAINING_STATUS_UNKNOWN = 'TrainingStatus.status.unknown',
    APP_TRAINING_STATUS_QUEUED = 'TrainingStatus.status.queued',
    APP_TRAINING_STATUS_RUNNING = 'TrainingStatus.status.running',
    APP_TRAINING_STATUS_COMPLETED = 'TrainingStatus.status.completed',
    APP_TRAINING_STATUS_FAILED = 'TrainingStatus.status.failed',
    APP_TRAINING_STATUS_LAST_UPDATE = 'TrainingStatus.lastupdate',
    APP_TRAINING_STATUS_REFRESH = 'TrainingStatus.refresh',
    APP_TRAINING_STATUS_EXPIRED = 'TrainingStatus.expired',

    // Apps List
    APPSLIST_SUBTITLE = 'AppsList.subtitle',
    APPSLIST_CREATEBUTTONARIADESCRIPTION = 'AppsList.createButtonAriaDescription',
    APPSLIST_CREATEBUTTONTEXT = 'AppsList.createButtonText',
    APPSLIST_IMPORTBUTTONARIADESCRIPTION = 'AppsList.importButtonAriaDescription',
    APPSLIST_IMPORTBUTTONTEXT = 'AppsList.importButtonText',
    APPSLIST_CONFIRMCANCELMODALTITLE = 'AppsList.confirmCancelModalTitle',
    APPSLIST_COLUMN_NAME = 'AppsList.columns.name',
    APPSLIST_COLUMNS_LOCALE = 'AppsList.columns.locale',
    APPSLIST_COLUMNS_LINKEDBOTS = 'AppsList.columns.linkedBots',
    APPSLIST_COLUMNS_LOGGING = 'AppsList.columns.logging',
    APPSLIST_COLUMNS_ACTIONS = 'AppsList.columns.actions',

    // Generic Buttons
    BUTTON_OK = 'Button.OK',
    BUTTON_CANCEL = 'Button.CANCEL',
    BUTTON_INFO = 'Button.INFO',
    BUTTON_IMPORT = 'Button.IMPORT',

    // Custom Errors
    CUSTOMERROR_NETWORK_ERROR = 'CustomError.networkError',

    // Dashboard
    DASHBOARD_TITLE = 'Dashboard.title',
    DASHBOARD_SUBTITLE = 'Dashboard.subtitle',

    // Entities
    ENTITIES_TITLE = 'Entities.title',
    ENTITIES_SUBTITLE = 'Entities.subtitle',
    ENTITIES_CREATEBUTTONARIALDESCRIPTION = 'Entities.createButtonAriaDescription',
    ENTITIES_CREATEBUTTONTEXT = 'Entities.createButtonText',
    ENTITIES_COLUMNS_NAME = 'Entities.columns.name',
    ENTITIES_COLUMNS_TYPE = 'Entities.columns.type',
    ENTITIES_COLUMNS_IS_PROGRAMMATIC = 'Entities.columns.isProgrammatic',
    ENTITIES_COLUMNS_IS_BUCKETABLE = 'Entities.columns.isBucketable',
    ENTITIES_COLUMNS_IS_NEGATABLE = 'Entities.columns.isNegatable',
    ENTITIES_CONFIRMCANCELMODALTITLE = 'Entities.confirmCancelModalTitle',
 
    // LogDialogs
    LOGDIALOGS_TITLE = 'LogDialogs.title',
    LOGDIALOGS_SUBTITLE = 'LogDialogs.subtitle',
    LOGDIALOGS_CREATEBUTTONTITLE = 'LogDialogs.createButtonTitle',
    LOGDIALOGS_CREATEBUTTONARIALDESCRIPTION = 'LogDialogs.createButtonAriaDescription',
    LOGDIALOGS_FIRSTINPUT = 'LogDialogs.firstInput',
    LOGDIALOGS_LASTINPUT = 'LogDialogs.lastInput',
    LOGDIALOGS_LASTRESPONSE = 'LogDialogs.lastResponse',
    LOGDIALOGS_TURNS = 'LogDialogs.turns',
    LOGDIALOGS_LOGDISABLED = 'LogDialogs.logdisabled',

    // LogDialogAdmin
    LOGDIALOGADMIN_CONFIRMTITLE = 'LogDialogAdmin.confirmTitle',

    // ReplayErrorList
    REPLAYERROR_LOGDIALOG_VALIDATION_TITLE = 'ReplayError.logdialogvalidation.title',
    REPLAYERROR_LOGDIALOG_VALIDATION_MESSAGE = 'ReplayError.logdialogvalidation.message',
    REPLAYERROR_CONVERT_TITLE = 'ReplayError.logdialogvalidation.convert.title',
    REPLAYERROR_FAILMESSAGE = 'ReplayError.failMessage',
    REPLAYERROR_UNDO_TITLE = 'ReplayError.undo.title',
    REPLAYERROR_EDIT_TITLE = 'ReplayError.edit.title',
    REPLAYERROR_BRANCH_TITLE = 'ReplayError.branch.title',
    REPLAYERROR_DESC_MISSING_ACTION = 'ReplayError.Desc.missingAction',
    REPLAYERROR_DESC_MISSING_ENTITY = 'ReplayError.Desc.missingEntity',
    REPLAYERROR_DESC_UNAVAILABLE_ACTION = 'ReplayError.Desc.unavailableAction',
    REPLAYERROR_DESC_CHANGED_ENTITIES = 'ReplayError.Desc.changedEntities',

    // Settings
    SETTINGS_TITLE = 'Settings.title',
    SETTINGS_SUBTITLE = 'Settings.subtitle',
    SETTINGS_FIELDERROR_REQUIREDVALUE = 'Settings.fieldError.requiredValue',
    SETTINGS_FIELDERROR_ALPHANUMERIC = 'Settings.fieldError.alphanumeric',
    SETTINGS_FIELDERROR_DISTINCT = 'Settings.fieldError.distinct',
    SETTINGS_FIELDS_NAMELABEL = 'Settings.fields.nameLabel',
    SETTINGS_FILEDS_APPIDLABEL = 'Settings.fields.appIdLabel',
    SETTINGS_FIELDS_MARKDOWNLABEL = 'Settings.fields.markdownLabel',
    SETTINGS_FIELDS_VIDEOLABEL = 'Settings.fields.videoLabel',
    SETTINGS_PASSWORDHIDDEN = 'Settings.passwordHidden',
    SETTINGS_PASSWORDVISIBLE = 'Settings.passwordVisible',
    SETTINGS_BOTFRAMEWORKAPPIDFIELDLABEL = 'Settings.botFrameworkAppIdFieldLabel',
    SETTINGS_BOTFRAMEWORKADDBOTBUTTONTEXT = 'Settings.botFrameworkAddBotButtonText',
    SETTINGS_BOTFRAMEWORKLUISKEY_AUTHORING_LABEL = 'Settings.botFrameworkLuisKey.authoring.label',
    SETTINGS_BOTFRAMEWORKLUISKEY_AUTHORING_PLACEHOLDER = 'Settings.botFrameworkLuisKey.authoring.placeholder',
    SETTINGS_BOTFRAMEWORKLUISKEY_SUBSCRIPTION_LABEL = 'Settings.botFrameworkLuisKey.subscription.label',
    SETTINGS_BOTFRAMEWORKLUISKEY_SUBSCRIPTION_PLACEHOLDER = 'Settings.botFrameworkLuisKey.subscription.placeholder',
    SETTINGS_BOTFRAMEWORKLOCALELABEL = 'Settings.botFrameworkLocaleLabel',
    SETTINGS_BOTFRAMEWORKLISTLABEL = 'Settings.botFrameworkListLabel',
    SETTINGS_SAVECHANGES = 'Settings.saveChanges',
    SETTINGS_DISCARD = 'Settings.discard',
    SETTINGS_LOGGINGON_LABEL = 'Settings.loggingon',

    // ToolTip
    TOOLTIP_ACTION_API = 'ToolTop.ACTION_API',
    TOOLTIP_ACTION_API_TITLE = 'ToolTop.ACTION_API_TITLE',
    TOOLTIP_ACTION_ARGUMENTS = 'ToolTip.ACTION_ARGUMENTS',
    TOOLTIP_ACTION_ARGUMENTS_TITLE = 'ToolTip.ACTION_ARGUMENTS_TITLE',
    TOOLTIP_ACTION_CARD = 'ToolTip.ACTION_CARD',
    TOOLTIP_ACTION_CARD_TITLE = 'ToolTip.ACTION_CARD_TITLE',
    TOOLTIP_ACTION_ENTITIES = 'ToolTip.ACTION_ENTITIES',
    TOOLTIP_ACTION_ENTITIES_REQ = 'ToolTip.ACTION_ENTITIES_REQ',
    TOOLTIP_ACTION_ENTITIES_REQ_NOT = 'ToolTip.ACTION_ENTITIES_REQ_NOT',
    TOOLTIP_ACTION_ENTITIES_DISQUAL = 'ToolTip.ACTION_ENTITIES_BLOCK',
    TOOLTIP_ACTION_ENTITIES_DISQUAL_NOT = 'ToolTip.ACTION_ENTITIES_BLOCK_NOT',
    TOOLTIP_ACTION_DISQUAL = 'ToolTip.ACTION_NEGATIVE',
    TOOLTIP_ACTION_DISQUAL_TITLE = 'ToolTip.ACTION_NEGATIVE_TITLE',
    TOOLTIP_ACTION_DISQUAL_ROW1 = 'ToolTip.ACTION_NEGATIVE_TITLE_ROW1',
    TOOLTIP_ACTION_DISQUAL_ROW2 = 'ToolTip.ACTION_NEGATIVE_TITLE_ROW2',
    TOOLTIP_ACTION_DISQUAL_ROW3 = 'ToolTip.ACTION_NEGATIVE_TITLE_ROW3',
    TOOLTIP_ACTION_DISQUAL_ROW4 = 'ToolTip.ACTION_NEGATIVE_TITLE_ROW4',

    TOOLTIP_ACTION_RESPONSE = 'ToolTip.ACTION_RESPONSE',
    TOOLTIP_ACTION_RESPONSE_TEXT1 = 'ToolTip.ACTION_RESPONSE_TEXT1',
    TOOLTIP_ACTION_RESPONSE_TEXT2 = 'ToolTip.ACTION_RESPONSE_TEXT2',
    TOOLTIP_ACTION_RESPONSE_TEXT3 = 'ToolTip.ACTION_RESPONSE_TEXT3',
    TOOLTIP_ACTION_RESPONSE_TEXT_TITLE = 'ToolTip.ACTION_RESPONSE_TEXT_TITLE',
    TOOLTIP_ACTION_RESPONSE_ROW1 = 'ToolTip.ACTION_RESPONSE_ROW1',
    TOOLTIP_ACTION_RESPONSE_ROW2 = 'ToolTip.ACTION_RESPONSE_ROW2',
    TOOLTIP_ACTION_RESPONSE_ROW3 = 'ToolTip.ACTIONRESPONSE_ROW3',

    TOOLTIP_ACTION_REQUIRED = 'ToolTip.ACTION_REQUIRED',
    TOOLTIP_ACTION_REQUIRED_TITLE = 'ToolTip.ACTION_REQUIRED_TITLE',
    TOOLTIP_ACTION_REQUIRED_ROW1 = 'ToolTip.ACTION_REQUIRED_ROW1',
    TOOLTIP_ACTION_REQUIRED_ROW2 = 'ToolTip.ACTION_REQUIRED_ROW2',
    TOOLTIP_ACTION_REQUIRED_ROW3 = 'ToolTip.ACTION_REQUIRED_ROW3',
    TOOLTIP_ACTION_REQUIRED_ROW4 = 'ToolTip.ACTION_REQUIRED_ROW4',
    TOOLTIP_ACTION_SCORE = 'ToolTip.ACTION_SCORE',
    TOOLTIP_ACTION_SCORE_PERCENT = 'ToolTip.ACTION_SCORE_PERCENT',
    TOOLTIP_ACTION_SCORE_TRAINING = 'ToolTip.ACTION_SCORE_TRAINING',
    TOOLTIP_ACTION_SCORE_DISQUALIFIED = 'ToolTip.ACTION_SCORE_DISQUALIFIED',

    TOOLTIP_ACTION_SUGGESTED = 'ToolTip.ACTION_SUGGESTED',
    TOOLTIP_ACTION_SUGGESTED_TITLE = 'ToolTip.ACTION_SUGGESTED_TITLE',
    TOOLTIP_ACTION_SUGGESTED_ROW1 = 'ToolTip.ACTION_SUGGESTED_ROW1',
    TOOLTIP_ACTION_SUGGESTED_ROW2 = 'ToolTip.ACTION_SUGGESTED_ROW2',

    TOOLTIP_ACTION_TYPE = 'ToolTip.ACTION_TYPE',
    TOOLTIP_ACTION_TYPE_TITLE = 'ToolTip.ACTION_TYPE_TITLE',
    TOOLTIP_ACTION_TYPE_TEXT = 'ToolTip.ACTION_TYPE.Text',
    TOOLTIP_ACTION_TYPE_APILOCAL = 'ToolTip.ACTION_TYPE.APILocal',
    TOOLTIP_ACTION_TYPE_APIAZURE = 'ToolTip.ACTION_TYPE.APIAzure',
    TOOLTIP_ACTION_TYPE_CARD = 'ToolTip.ACTION_TYPE.Card',
    TOOLTIP_ACTION_WAIT = 'ToolTip.ACTION_WAIT',
    TOOLTIP_ACTION_WAIT_TITLE = 'ToolTip.ACTION_WAIT_TITLE',
    TOOLTIP_BOTINFO_INVALID = 'ToolTip.BOTINFO_INVALID',
    TOOLTIP_ENTITY_ACTION_REQUIRED = 'ToolTip.ENTITY_ACTION_REQUIRED',
    TOOLTIP_ENTITY_ACTION_DISQUALIFIED = 'ToolTip.ENTITY_ACTION_BLOCKED',
    TOOLTIP_ENTITY_EXTRACTOR_HELP = 'ToolTipo.ENTITY_EXTRACTOR_HELP',
    TOOLTIP_ENTITY_EXTRACTOR_WARNING = 'ToolTip.ENTITY_EXTRACTOR_WARNING',
    TOOLTIP_ENTITY_NAME = 'ToolTip.ENTITY_NAME',
    TOOLTIP_ENTITY_VALUE = 'ToolTip.ENTITY_VALUE',
    TOOLTIP_ENTITY_TYPE = 'ToolTip.ENTITY_TYPE',
    TOOLTIP_EXAMPLE = 'ToolTip.EXAMPLE',
    TOOLTIP_LOGGING_TOGGLE = 'ToolTip.LOGGING_TOGGLE',
    TOOLTIP_MEMORYMANAGER = 'ToolTip.ACTION_MEMORYMANAGER',
    TOOLTIP_MEMORYMANAGER_TITLE = 'ToolTip.ACTION_MEMORYMANAGER_TITLE',
    TOOLTIP_PACKAGECREATOR_LIVE_TOGGLE = 'ToolTip.PACKAGECREATOR_LIVE_TOGGLE',
    TOOLTIP_TAG_EDITING = 'ToolTip.TAG_EDITING',
    TOOLTIP_TAG_LIVE = 'ToolTip.TAG_LIVE',
    TOOLTIP_TRAINDIALOG_INVALID = 'ToolTip.TRAINDIALOG_INVALID',

    // Train Dialogs
    TRAINDIALOGS_TITLE = 'TrainDialogs.title',
    TRAINDIALOGS_SUBTITLE = 'TrainDialogs.subtitle',
    TRAINDIALOGS_CREATEBUTTONTITLE = 'TrainDialogs.createButtonTitle',
    TRAINDIALOGS_CREATEBUTTONARIALDESCRIPTION = 'TrainDialogs.createButtonAriaDescription',
    TRAINDIALOGS_FIRSTINPUT = 'TrainDialogs.firstInput',
    TRAINDIALOGS_LASTINPUT = 'TrainDialogs.lastInput',
    TRAINDIALOGS_LASTRESPONSE = 'TrainDialogs.lastResponse',
    TRAINDIALOGS_TURNS = 'TrainDialogs.turns',

    // Tutorial Importer
    TUTORIALIMPORTER_TITLE = 'TutorialImporter.Title',

    // Validations
    VALIDATE_UNABLE_TO_EDIT = 'Validate.unableToEdit',
    VALIDATE_UNABLE_TO_BRANCH = 'Validate.unableToBranch',
    VALIDATE_UNABLE_TO_UNDO = 'Validate.unableToUndo',
    VALIDATE_ENTITY_REASON = 'Validate.entityReason',

    // ActionDetails
    ACTIONDETAILSLIST_COLUMNS_RESPONSE = 'ActionDetailsList.columns.response',
    ACTIONDETAILSLIST_COLUMNS_ARGUMENTS = 'ActionDetailsList.columns.arguments',
    ACTIONDETAILSLIST_COLUMNS_TYPE = 'ActionDetailsList.columns.type',
    ACTIONDETAILSLIST_COLUMNS_REQUIREDENTITIES = 'ActionDetailsList.columns.requiredEntities',
    ACTIONDETAILSLIST_COLUMNS_DISQUALIFYINGENTITIES = 'ActionDetailsList.columns.disqualifyingEntities',
    ACTIONDETAILSLIST_COLUMNS_SUGGESTEDENTITY = 'ActionDetailsList.columns.suggestedEntity',
    ACTIONDETAILSLIST_COLUMNS_ISTERMINAL = 'ActionDetailsList.columns.isTerminal',

    // TextVariation
    TEXTVARIATION_PLACEHOLDER = 'TextVariationCreator.placeholder',

    // ActionCreatorEditor
    ACTIONCREATOREDITOR_SAVEBUTTON_ARIADESCRIPTION = 'ActionCreatorEditor.saveButton.ariaDescription',
    ACTIONCREATOREDITOR_SAVEBUTTON_TEXT = 'ActionCreatorEditor.saveButton.text',
    ACTIONCREATOREDITOR_CREATEBUTTON_ARIADESCRIPTION = 'ActionCreatorEditor.createButton.ariaDescription',
    ACTIONCREATOREDITOR_CREATEBUTTON_TEXT = 'ActionCreatorEditor.createButton.text',
    ACTIONCREATOREDITOR_CANCELBUTTON_ARIADESCRIPTION = 'ActionCreatorEditor.cancelButton.ariaDescription',
    ACTIONCREATOREDITOR_CANCELBUTTON_TEXT = 'ActionCreatorEditor.cancelButton.text',
    ACTIONCREATOREDITOR_DONEBUTTON_ARIADESCRIPTION = 'ActionCreatorEditor.doneButton.ariaDescription',
    ACTIONCREATOREDITOR_DONEBUTTON_TEXT = 'ActionCreatorEditor.doneButton.text',
    ACTIONCREATOREDITOR_DELETEBUTTON_ARIADESCRIPTION = 'ActionCreatorEditor.deleteButton.ariaDescription',
    ACTIONCREATOREDITOR_DELETEBUTTON_TEXT = 'ActionCreatorEditor.deleteButton.text',
    ACTIONCREATOREDITOR_TRAINDIALOGSBUTTON_ARIADESCRIPTION = 'ActionCreatorEditor.traindialogsButton.ariaDescription',
    ACTIONCREATOREDITOR_TRAINDIALOGSBUTTON_TEXT = 'ActionCreatorEditor.traindialogsButton.text',
    ACTIONCREATOREDITOR_CONFIRM_DELETE_TITLE = 'ActionCreatorEditor.confirmDeleteTitle',
    ACTIONCREATOREDITOR_CONFIRM_DELETE_WARNING = 'ActionCreatorEditor.confirmDeleteWarning',
    ACTIONCREATOREDITOR_CONFIRM_EDIT_TITLE = 'ActionCreatorEditor.confirmEditTitle',
    ACTIONCREATOREDITOR_CONFIRM_EDIT_WARNING = 'ActionCreatorEditor.confirmEditWarning',
    
    // ActionScorer
    ACTIONSCORER_COLUMNS_RESPONSE = 'ActionScorer.columns.response',
    ACTIONSCORER_COLUMNS_ARGUMENTS = 'ActionScorer.columns.arguments',
    ACTIONSCORER_COLUMNS_SCORE = 'ActionScorer.columns.score',
    ACTIONSCORER_COLUMNS_ENTITIES = 'ActionScorer.columns.entities',
    ACTIONSCORER_COLUMNS_ISTERMINAL = 'ActionScorer.columns.isTerminal',
    ACTIONSCORER_COLUMNS_TYPE = 'ActionScorer.columns.type',

    // AppCreator
    APPCREATOR_FIELDERROR_REQUIREDVALUE = 'AppCreator.fieldError.requiredValue',
    APPCREATOR_FIELDERROR_ALPHANUMERIC = 'AppCreator.fieldError.alphanumeric',
    APPCREATOR_FIELDERROR_DISTINCT = 'AppCreator.fieldError.distinct',
    APPCREATOR_TITLE = 'AppCreator.title',
    APPCREATOR_FIELDS_NAME_LABEL = 'AppCreator.fields.name.label',
    APPCREATOR_FIELDS_NAME_PLACEHOLDER = 'AppCreator.fields.name.placeholder',
    APPCREATOR_FIELDS_LOCALE_LABEL = 'AppCreator.fields.locale.label',
    APPCREATOR_CREATEBUTTON_ARIADESCRIPTION = 'AppCreator.createButton.ariaDescription',
    APPCREATOR_CREATEBUTTON_TEXT = 'AppCreator.createButton.text',
    APPCREATOR_CANCELBUTTON_ARIADESCRIPTION = 'AppCreator.cancelButton.ariaDescription',
    APPCREATOR_CANCELBUTTON_TEXT = 'AppCreator.cancelButton.text',

    // ChatSessionModal
    CHATSESSIONMODAL_PRIMARYBUTTON_ARIADESCRIPTION = 'ChatSessionModal.primaryButton.ariaDescription',
    CHATSESSIONMODAL_PRIMARYBUTTON_TEXT = 'ChatSessionModal.primaryButton.text',
    CHATSESSIONMODAL_EXPIREBUTTON_ARIADESCRIPTION = 'ChatSessionModal.expireButton.ariaDescription',
    CHATSESSIONMODAL_EXPIREBUTTON_TEXT = 'ChatSessionModal.expireButton.text',

    // ConfirmCancelModal
    CONFIRMCANCELMODAL_PRIMARYBUTTON_TEXT = 'ConfirmCancelModal.primaryButton.text',
    CONFIRMCANCELMODAL_DEFAULTBUTTON_TEXT = 'ConfirmCancelModal.defaultButton.text',

    // DemoImporter
    DEMOIMPORT_TITLE = 'DemoImporter.title',
    DEMOIMPORT_BUTTON_ARIADESCRIPTION = 'DemoImporter.button.ariaDescription',
    DEMOIMPORT_BUTTON_TEXT = 'DemoImporter.button.text',

    // EntityCreatorEditor
    ENTITYCREATOREDITOR_FIELDERROR_REQUIREDVALUE = 'EntityCreatorEditor.fieldError.requiredValue',
    ENTITYCREATOREDITOR_FIELDERROR_ALPHANUMERIC = 'EntityCreatorEditor.fieldsError.alphanumerica',
    ENTITYCREATOREDITOR_FIELDERROR_DISTINCT = 'EntityCreatorEditor.fields.distinct',
    ENTITYCREATOREDITOR_ENTITYOPTION_NEW = 'EntityCreatorEditor.entityOption.new',
    ENTITYCREATOREDITOR_TITLE_CREATE = 'EntityCreatorEditor.title.create',
    ENTITYCREATOREDITOR_TITLE_EDIT = 'EntityCreatorEditor.title.edit',
    ENTITYCREATOREDITOR_FIELDS_NAME_LABEL = 'EntityCreatorEditor.fields.name.label',
    ENTITYCREATOREDITOR_FIELDS_NAME_PLACEHOLDER = 'EntityCreatorEditor.fields.name.placeholder',
    ENTITYCREATOREDITOR_FIELDS_TYPE_LABEL = 'EntityCreatorEditor.fields.type.label',
    ENTITYCREATOREDITOR_FIELDS_PROGRAMMATICONLY_LABEL = 'EntityCreatorEditor.fields.programmatically.label',
    ENTITYCREATOREDITOR_FIELDS_PROGRAMMATICONLY_HELPTEXT = 'EntityCreatorEditor.fields.programmatically.helptext',
    ENTITYCREATOREDITOR_FIELDS_TOOLTIPTARGET = 'EntityCreatorEditor.fields.tooltiptarget',
    ENTITYCREATOREDITOR_FIELDS_MULTIVALUE_LABEL = 'EntityCreatorEditor.fields.multiValue.label',
    ENTITYCREATOREDITOR_FIELDS_MULTIVALUE_HELPTEXT = 'EntityCreatorEditor.fields.multiValue.helpText',
    ENTITYCREATOREDITOR_FIELDS_NEGATAABLE_LABEL = 'EntityCreatorEditor.fields.negatable.label',
    ENTITYCREATOREDITOR_FIELDS_NEGATABLE_HELPTEXT = 'EntityCreatorEditor.fields.negatable.helpText',
    ENTITYCREATOREDITOR_PIVOT_EDIT = 'EntityCreatorEditor.pivot.editEntity',
    ENTITYCREATOREDITOR_PIVOT_REQUIREDFOR = 'EntityCreatorEditor.pivot.requiredForActions',
    ENTITYCREATOREDITOR_PIVOT_DISQUALIFIEDACTIONS = 'EntityCreatorEditor.pivot.disqualifiedActions',
    ENTITYCREATOREDITOR_CREATEBUTTON_ARIADESCRIPTION = 'EntityCreatorEditor.createButton.ariaDescription',
    ENTITYCREATOREDITOR_CREATEBUTTON_TEXT = 'EntityCreatorEditor.createButton.text',
    ENTITYCREATOREDITOR_SAVEBUTTON_ARIADESCRIPTION = 'EntityCreatorEditor.saveButton.ariaDescription',
    ENTITYCREATOREDITOR_SAVEBUTTON_TEXT = 'EntityCreatorEditor.saveButton.text',
    ENTITYCREATOREDITOR_CANCELBUTTON_ARIADESCRIPTION = 'EntityCreatorEditor.cancelButton.ariaDescription',
    ENTITYCREATOREDITOR_CANCELBUTTON_TEXT = 'EntityCreatorEditor.cancelButton.text',
    ENTITYCREATOREDITOR_DONEBUTTON_ARIADESCRIPTION = 'EntityCreatorEditor.doneButton.ariaDescription',
    ENTITYCREATOREDITOR_DONEBUTTON_TEXT = 'EntityCreatorEditor.doneButton.text',
    ENTITYCREATOREDITOR_DELETEBUTTON_ARIADESCRIPTION = 'EntityCreatorEditor.deleteButton.ariaDescription',
    ENTITYCREATOREDITOR_DELETEBUTTON_TEXT = 'EntityCreatorEditor.deleteButton.text',
    ENTITYCREATOREDITOR_TRAINDIALOGSBUTTON_ARIADESCRIPTION = 'EntityCreatorEditor.traindialogsButton.ariaDescription',
    ENTITYCREATOREDITOR_TRAINDIALOGSBUTTON_TEXT = 'EntityCreatorEditor.traindialogsButton.text',
    ENTITYCREATOREDITOR_CONFIRM_DELETE_TITLE = 'EntityCreatorEditor.confirmDeleteTitle',
    ENTITYCREATOREDITOR_CONFIRM_DELETE_WARNING = 'EntityCreatorEditor.confirmDeleteWarning',
    ENTITYCREATOREDITOR_CONFIRM_EDIT_TITLE = 'EntityCreatorEditor.confirmEditTitle',
    ENTITYCREATOREDITOR_CONFIRM_EDIT_WARNING = 'EntityCreatorEditor.confirmEditWarning',
    ENTITYCREATOREDITOR_DELETE_ERROR_TITLE = 'EntityCreatorEditor.deleteErrorTitle',
    ENTITYCREATOREDITOR_DELETE_ERROR_WARNING = 'EntityCreatorEditor.deleteErrorWarning',

    // Error
    ERROR_ERROR = 'Error.error',
    ERROR_WARNING = 'Error.warning',
    ERROR_PRIMARYBUTTON_ARIADESCRIPTION = 'Error.ariaDescription',
    ERROR_PRIMARYBUTTON_TEXT = 'Error.text',

    // LogDialogModal
    LOGDIALOGMODAL_DEFAULTBUTTON_ARIADESCRIPTION = 'LogDialogModal.defaultButton.ariaDescription',
    LOGDIALOGMODAL_DEFAULTBUTTON_TEXT = 'LogDialogModal.defaultButton.text',
    LOGDIALOGMODAL_PRIMARYBUTTON_ARIADESCRIPTION = 'LogDialogModal.primaryButton.ariaDescription',
    LOGDIALOGMODAL_PRIMARYBUTTON_TEXT = 'LogDialogModal.primaryButton.text',
    LOGDIALOGMODAL_CONFIRMDELETE_TITLE = 'LogDialogModal.confirmDelete.title',

    // LogOut
    LOGOUT_TITLE = 'LogoutModal.title',
    LOGOUT_PRIMARYBUTTON_ARIADESCRIPTION = 'LogoutModal.primaryButton.ariaDescription',
    LOGOUT_PRIMARYBUTTON_TEXT = 'LogoutModal.primaryButton.text',
    LOGOUT_DEFAULTBUTTON_ARIADESCRIPTION = 'LogoutModal.defaultButton.ariaDescription',
    LOGOUT_DEFAULTBUTTON_TEXT = 'LogoutModal.defaultButton.text',

    // MemoryTable
    MEMORYTABLE_EMPTY = 'MemoryTable.empty',

    // PackageCreator
    PACKAGECREATOR_TITLE = 'PackageCreator.title',
    PACKAGECREATOR_TAG_LABEL = 'PackageCreator.tagLabel',
    PACKAGECREATOR_TAG_PLACEHOLDER = 'PackageCreator.tagPlaceholder',
    PACKAGECREATOR_LIVE_LABEL = 'PackageCreator.liveLabel',
    PACKAGECREATOR_CREATEBUTTON_ARIADESCRIPTION = 'PackageCreator.createButton.ariaDescription',
    PACKAGECREATOR_CREATEBUTTON_TEXT = 'PackageCreator.createButton.text',
    PACKAGECREATOR_CANCELBUTTON_ARIADESCRIPTION = 'PackageCreator.cancelButton.ariaDescription',
    PACKAGECREATOR_CANCELBUTTON_TEXT = 'PackageCreator.cancelButton.text',

    // SessionMemoryCheck
    SESSIONMEMORYCHECK_KEEPBUTTON_ARIADESCRIPTION = 'SessionMemoryCheck.keepButton.ariaDescription',
    SESSIONMEMORYCHECK_KEEPBUTTON_TEXT = 'SessionMemoryCheck.keepButton.text',
    SESSIONMEMORYCHECK_CLEARBUTTON_ARIADESCRIPTION = 'SessionMemoryCheck.clearButton.ariaDescription',
    SESSIONMEMORYCHECK_CLEARBUTTON_TEXT = 'SessionMemoryCheck.clearButton.text',
    SESSIONMEMORYCHECK_DESCRIPTION_ARIADESCRIPTION = 'SessionMemoryCheck.description.ariaDescription',
    SESSIONMEMORYCHECK_DESCRIPTION_TEXT = 'SessionMemoryCheck.description.text',

    // TeachSessionAdmin
    TEACHSESSIONADMIN_DIALOGMODE_USER = 'TeachSessionAdmin.dialogMode.user',
    TEACHSESSIONADMIN_DIALOGMODE_BOT = 'TeachSessionAdmin.dialogMode.bot',
    TEACHSESSIONADMIN_MEMORY_TITLE = 'TeachSessionAdmin.memory.title',
    TEACHSESSIONADMIN_ENTITYDETECTION_TITLE = 'TeachSessionAdmin.entityDetection.title',
    TEACHSESSIONADMIN_ACTION_TITLE = 'TeachSessionAdmin.action.title',
    TEACHSESSIONADMIN_TRAINSTATUS_COMPLETED = 'TeachSessionAdmin.trainstatus.completed',
    TEACHSESSIONADMIN_TRAINSTATUS_NEWSCORES = 'TeachSessionAdmin.trainstatus.newscores',
    TEACHSESSIONADMIN_TRAINSTATUS_REFRESH = 'TeachSessionAdmin.trainstatus.refresh',
    TEACHSESSIONADMIN_TRAINSTATUS_FAILED = 'TeachSessionAdmin.trainstatus.failed',
    TEACHSESSIONADMIN_TRAINSTATUS_RUNNING = 'TeachSessionAdmin.trainstatus.running',

    // TeachSessionModal
    TEACHSESSIONMODAL_UNDO_ARIADESCRIPTION = 'TeachSessionModal.undo.ariaDescription',
    TEACHSESSIONMODAL_UNDO_TEXT = 'TeachSessionModal.undo.text',
    TEACHSESSIONMODAL_EDIT_ABANDON_BUTTON_TEXT = 'TeachSessionModal.edit.abandon.buttontext',
    TEACHSESSIONMODAL_TEACH_ABANDON_BUTTON_TEXT = 'TeachSessionModal.teach.abandon.buttontext',
    TEACHSESSIONMODAL_EDIT_DONE_BUTTON_TEXT = 'TeachSessionModal.edit.done.buttontext',
    TEACHSESSIONMODAL_TEACH_DONE_BUTTON_TEXT = 'TeachSessionModal.teach.done.buttontext',
    TEACHSESSIONMODAL_TEACH_CONFIRMDELETE_TITLE = 'TeachSessionModal.teach.confirmDelete.title',
    TEACHSESSIONMODAL_EDIT_CONFIRMDELETE_TITLE = 'TeachSessionModal.edit.confirmDelete.title',

    // TrainDialogAdmin
    TRAINDIALOGADMIN_DIALOGMODE_USER = 'TrainDialogAdmin.dialogMode.user',
    TRAINDIALOGADMIN_DIALOGMODE_TEXT = 'TrainDialogAdmin.dialogMode.text',
    TRAINDIALOGADMIN_MEMORY_TITLE = 'TrainDialogAdmin.memory.title',
    TRAINDIALOGADMIN_HELPTEXT_TITLE = 'TrainDialogAdmin.helpText.title',
    TRAINDIALOGADMIN_HELPTEXT_DESCRIPTION = 'TrainDialogAdmin.helpText.description',
    TRAINDIALOGADMIN_HELPTEXT_DESCRIPTION2 = 'TrainDialogAdmin.helpText.description2',
    TRAINDIALOGADMIN_ENTITYDETECTION_TITLE = 'TrainDialogAdmin.entityDetection.title',
    TRAINDIALOGADMIN_ENTITYDETECTION_HELPTEXT = 'TrainDialogAdmin.entityDetection.helpText',
    TRAINDIALOGADMIN_ACTION_TITLE = 'TrainDialogAdmin.action.title',
    TRAINDIALOGADMIN_SAVECHANGES_TITLE = 'TrainDialogAdmin.saveChanges.title',
    TRAINDIALOGADMIN_SAVECHANGES_DESCRIPTION = 'TrainDialogAdmin.saveChanges.description',
    TRAINDIALOGADMIN_SAVECHANGES_PRIMARYBUTTON_TEXT = 'TrainDialogAdmin.saveChanges.primaryButton.text',
    TRAINDIALOGADMIN_SAVECHANGES_DEFAULTBUTTON_TEXT = 'TrainDialogAdmin.saveChanges.defaultButton.text',

    // TrainDialogModal
    TRAINDIALOGMODAL_BRANCH_ARIADESCRIPTION = 'TrainDialogModal.branch.ariaDescription',
    TRAINDIALOGMODAL_BRANCH_TEXT = 'TrainDialogModal.branch.text',
    TRAINDIALOGMODAL_BRANCH_TIP = 'TrainDialogModal.branch.tip',
    TRAINDIALOGMODAL_DEFAULTBUTTON_ARIADESCRIPTION = 'TrainDialogModal.defaultButton.ariaDescription',
    TRAINDIALOGMODAL_DEFAULTBUTTON_TEXT = 'TrainDialogModal.defaultButton.text',
    TRAINDIALOGMODAL_PRIMARYBUTTON_ARIADESCRIPTION = 'TrainDialogModal.primaryButton.ariaDescription',
    TRAINDIALOGMODAL_PRIMARYBUTTON_TEXT = 'TrainDialogModal.primaryButton.text',
    TRAINDIALOGMODAL_CONFIRMDELETE_TITLE = 'TrainDialogModal.confirmDelete.title',
}

// Message ids follow convention of '<componentname>.<area>[.<subarea>]*`
export default {
    'en-US': {
        //  {FM.ABOUT_TITLE}
        [FM.ABOUT_TITLE]: 'About',
        [FM.DOCS_TITLE]: 'Docs',
        [FM.LOGIN_TITLE]: 'Log In',
        [FM.PROFILE_TITLE]: 'Profile',
        [FM.PROFILE_NAME]: 'Name',
        [FM.PROFILE_SETTINGS_TITLE]: 'Settings',
        [FM.PROFILE_SETTINGS_SDKPORT]: 'SDK Port',
        [FM.SUPPORT_TITLE]: 'Support',
        [FM.NOMATCH_TITLE]: 'That page was not found.',
        [FM.NOMATCH_HOME]: 'My Apps',
        [FM.PAGE_COMINGSOON]: 'Coming soon...',

        // Actions
        [FM.ACTIONS_TITLE]: 'Actions',
        [FM.ACTIONS_SUBTITLE]: `Actions are executed by the bot in response to user input`,
        [FM.ACTIONS_CREATEBUTTONARIADESCRIPTION]: 'Create a New Action',
        [FM.ACTIONS_CREATEBUTTONTITLE]: 'New Action',
        [FM.ACTIONS_CONFIRMCANCELMODALTITLE]: 'Are you sure you want to delete this action?',

        // App
        [FM.APP_HEADER_MYAPPS]: 'My Apps',
        [FM.APP_HEADER_ABOUT]: 'About',
        [FM.APP_HEADER_DOCS]: 'Docs',
        [FM.APP_HEADER_SUPPORT]: 'Support',

        // TrainingStatus
        [FM.APP_TRAINING_STATUS_STATUS]: 'Status',
        [FM.APP_TRAINING_STATUS_UNKNOWN]: 'Unknown',
        [FM.APP_TRAINING_STATUS_QUEUED]: 'Queued',
        [FM.APP_TRAINING_STATUS_RUNNING]: 'Running',
        [FM.APP_TRAINING_STATUS_COMPLETED]: 'Completed',
        [FM.APP_TRAINING_STATUS_FAILED]: 'Failed',
        [FM.APP_TRAINING_STATUS_LAST_UPDATE]: 'Last Updated',
        [FM.APP_TRAINING_STATUS_REFRESH]: 'Refresh',
        [FM.APP_TRAINING_STATUS_EXPIRED]: 'Polling was stopped before training status was finalized. Please Refresh',

        // Apps List
        [FM.APPSLIST_SUBTITLE]: 'Create and manage your Conversation Learner applications',
        [FM.APPSLIST_CREATEBUTTONARIADESCRIPTION]: 'Create a New Application',
        [FM.APPSLIST_CREATEBUTTONTEXT]: 'New App',
        [FM.APPSLIST_IMPORTBUTTONARIADESCRIPTION]: 'Import Tutorials Applications',
        [FM.APPSLIST_IMPORTBUTTONTEXT]: 'Import Tutorials',
        [FM.APPSLIST_CONFIRMCANCELMODALTITLE]: 'Are you sure you want to delete this application? {appName}',
        [FM.APPSLIST_COLUMN_NAME]: 'Name',
        [FM.APPSLIST_COLUMNS_LOCALE]: 'Locale',
        [FM.APPSLIST_COLUMNS_LINKEDBOTS]: 'Linked Bots',
        [FM.APPSLIST_COLUMNS_LOGGING]: 'Logging Enabled',
        [FM.APPSLIST_COLUMNS_ACTIONS]: 'Actions',

        // Generic Buttons
        [FM.BUTTON_OK]: 'OK',
        [FM.BUTTON_CANCEL]: 'Cancel',
        [FM.BUTTON_IMPORT]: 'Import',
        [FM.BUTTON_INFO]: 'Info',

        // Custom Errors
        [FM.CUSTOMERROR_NETWORK_ERROR]: 'Is your Bot running?',

        // Dashboard
        [FM.DASHBOARD_TITLE]: 'Overview',
        [FM.DASHBOARD_SUBTITLE]: `Notifications about this application`,

        // Entities
        [FM.ENTITIES_TITLE]: 'Entities',
        [FM.ENTITIES_SUBTITLE]: `Entities hold values from the user or are set by code, and are stored in the bot's memory to track state`,
        [FM.ENTITIES_CREATEBUTTONARIALDESCRIPTION]: 'Create a New Entity',
        [FM.ENTITIES_CREATEBUTTONTEXT]: 'New Entity',
        [FM.ENTITIES_COLUMNS_NAME]: 'Name',
        [FM.ENTITIES_COLUMNS_TYPE]: 'Type',
        [FM.ENTITIES_COLUMNS_IS_PROGRAMMATIC]: 'Programmatic',
        [FM.ENTITIES_COLUMNS_IS_BUCKETABLE]: 'Multi-Value',
        [FM.ENTITIES_COLUMNS_IS_NEGATABLE]: 'Negatable',
        [FM.ENTITIES_CONFIRMCANCELMODALTITLE]: 'Are you sure you want to delete this entity?',

        // LogDialogs
        [FM.LOGDIALOGS_TITLE]: 'Log Dialogs',
        [FM.LOGDIALOGS_SUBTITLE]: 'Log Dialogs are records of conversations between users and your bot. You can make corrections to Log Dialogs to improve the bot.',
        [FM.LOGDIALOGS_CREATEBUTTONTITLE]: 'New Log Dialog',
        [FM.LOGDIALOGS_CREATEBUTTONARIALDESCRIPTION]: 'Create a New Log Dialog',
        [FM.LOGDIALOGS_FIRSTINPUT]: 'First Input',
        [FM.LOGDIALOGS_LASTINPUT]: 'Last Input',
        [FM.LOGDIALOGS_LASTRESPONSE]: 'Last Response',
        [FM.LOGDIALOGS_TURNS]: 'Turns',
        [FM.LOGDIALOGS_LOGDISABLED]: 'Logging is disabled',

        // LogDialogAdmin
        [FM.LOGDIALOGADMIN_CONFIRMTITLE]: 'This will attempt to replay the Log Dialog against the bot and convert it into a new Train Dialog',

        // ReplayErrorList
        [FM.REPLAYERROR_LOGDIALOG_VALIDATION_TITLE]: 'Application definition has changed',
        [FM.REPLAYERROR_LOGDIALOG_VALIDATION_MESSAGE]: 'This Log Dialog was created with a earlier version of the application.  The following incomptibilities were found:',
        [FM.REPLAYERROR_CONVERT_TITLE]: 'Unable to convert to Train Dialog',
        [FM.REPLAYERROR_FAILMESSAGE]: 'The following issues occurred when attempting to replay the dialog',
        [FM.REPLAYERROR_UNDO_TITLE]: 'Unable to Undo',
        [FM.REPLAYERROR_EDIT_TITLE]: 'Unable to Edit',
        [FM.REPLAYERROR_BRANCH_TITLE]: 'Unable to Branch',
        [FM.REPLAYERROR_DESC_MISSING_ACTION]: 'Missing action in response to',
        [FM.REPLAYERROR_DESC_MISSING_ENTITY]: 'Missing entity for',
        [FM.REPLAYERROR_DESC_UNAVAILABLE_ACTION]: 'Action unavailable in reponse to',
        [FM.REPLAYERROR_DESC_CHANGED_ENTITIES]: 'Entites inconsistent after user input',
        
        // Settings
        [FM.SETTINGS_TITLE]: 'Settings',
        [FM.SETTINGS_SUBTITLE]: 'Control your application version tags and other application configuration',
        [FM.SETTINGS_FIELDERROR_REQUIREDVALUE]: 'Required Value',
        [FM.SETTINGS_FIELDERROR_ALPHANUMERIC]: 'Application name may only contain alphanumeric characters',
        [FM.SETTINGS_FIELDERROR_DISTINCT]: 'Name is already in use.',
        [FM.SETTINGS_FIELDS_NAMELABEL]: 'Name',
        [FM.SETTINGS_FILEDS_APPIDLABEL]: 'App ID',
        [FM.SETTINGS_FIELDS_MARKDOWNLABEL]: 'Markdown',
        [FM.SETTINGS_FIELDS_VIDEOLABEL]: 'Video',
        [FM.SETTINGS_PASSWORDHIDDEN]: 'Show',
        [FM.SETTINGS_PASSWORDVISIBLE]: 'Hide',
        [FM.SETTINGS_BOTFRAMEWORKAPPIDFIELDLABEL]: 'Application ID',
        [FM.SETTINGS_BOTFRAMEWORKADDBOTBUTTONTEXT]: 'Add',
        [FM.SETTINGS_BOTFRAMEWORKLUISKEY_AUTHORING_LABEL]: 'LUIS Authoring Key',
        [FM.SETTINGS_BOTFRAMEWORKLUISKEY_AUTHORING_PLACEHOLDER]: 'Authoring Key...',
        [FM.SETTINGS_BOTFRAMEWORKLUISKEY_SUBSCRIPTION_LABEL]: 'LUIS Subscription Key',
        [FM.SETTINGS_BOTFRAMEWORKLUISKEY_SUBSCRIPTION_PLACEHOLDER]: 'Subscription Key...',
        [FM.SETTINGS_BOTFRAMEWORKLOCALELABEL]: 'Locale',
        [FM.SETTINGS_BOTFRAMEWORKLISTLABEL]: 'Bot Framework Apps',
        [FM.SETTINGS_SAVECHANGES]: 'Save Changes',
        [FM.SETTINGS_DISCARD]: 'Discard',
        [FM.SETTINGS_LOGGINGON_LABEL]: 'Log Conversations',

        // ToolTip
        [FM.TOOLTIP_ACTION_API]: 'APIs exposed in the running Bot of the form:',
        [FM.TOOLTIP_ACTION_API_TITLE]: 'API',
        [FM.TOOLTIP_ACTION_ARGUMENTS]: `When Action Type is an API call, a list of comma separated arguments passed to the API. Arguments prefixed with a $ refer to Entity values.  For example: "$city"`,
        [FM.TOOLTIP_ACTION_ARGUMENTS_TITLE]: `Arguments`,
        [FM.TOOLTIP_ACTION_CARD]: `When Action Type is a card call, a list of comma separated arguments passed to the Card. Arguments prefixed with a $ refer to Entity values.  For example: "$city"`,
        [FM.TOOLTIP_ACTION_CARD_TITLE]: `Card`,
        [FM.TOOLTIP_ACTION_ENTITIES]: 'Status of Entity requirements for this action:',
        [FM.TOOLTIP_ACTION_ENTITIES_REQ]: 'Required Entity is present',
        [FM.TOOLTIP_ACTION_ENTITIES_REQ_NOT]: 'Required Enitity is missing (DISQUALIFIES ACTION)',
        [FM.TOOLTIP_ACTION_ENTITIES_DISQUAL]: 'Disqualifying Entity is present (DISQUALIFIES ACTION)',
        [FM.TOOLTIP_ACTION_ENTITIES_DISQUAL_NOT]: 'Disqualifying Entity is missing',

        [FM.TOOLTIP_ACTION_DISQUAL]: 'Action will not be selected if Memory already contains value for these Entities',
        [FM.TOOLTIP_ACTION_DISQUAL_TITLE]: 'Disqualifying Entities',
        [FM.TOOLTIP_ACTION_DISQUAL_ROW1]: '"How would you like to pay?"',
        [FM.TOOLTIP_ACTION_DISQUAL_ROW2]: '$paymentDetails',
        [FM.TOOLTIP_ACTION_DISQUAL_ROW3]: '"When were you born?"',
        [FM.TOOLTIP_ACTION_DISQUAL_ROW4]: '$birthdate',

        [FM.TOOLTIP_ACTION_RESPONSE]: 'Value of Response that Bot will take',
        [FM.TOOLTIP_ACTION_RESPONSE_TEXT1]: 'Text the Bot will display to the user.',
        [FM.TOOLTIP_ACTION_RESPONSE_TEXT2]: 'Prefix text with a $ to substitute Entity values.',
        [FM.TOOLTIP_ACTION_RESPONSE_TEXT3]: 'Text contained in brackets (i.e. []) will only be displayed if all contained entities have values.',
        [FM.TOOLTIP_ACTION_RESPONSE_TEXT_TITLE]: 'Response',
        [FM.TOOLTIP_ACTION_RESPONSE_ROW1]: '"How can I help you?"',
        [FM.TOOLTIP_ACTION_RESPONSE_ROW2]: '"You have $toppings on your pizza."',
        [FM.TOOLTIP_ACTION_RESPONSE_ROW3]: '"Hi[, $name]"',

        [FM.TOOLTIP_ACTION_REQUIRED]: 'Action will not be selected unless Memory contains values for these Entities',
        [FM.TOOLTIP_ACTION_REQUIRED_TITLE]: 'Required Entities',
        [FM.TOOLTIP_ACTION_REQUIRED_ROW1]: '"How would you like to pay?"',
        [FM.TOOLTIP_ACTION_REQUIRED_ROW2]: '$orderDetails $address',
        [FM.TOOLTIP_ACTION_REQUIRED_ROW3]: '"Hi, $name"',
        [FM.TOOLTIP_ACTION_REQUIRED_ROW4]: '$name',

        [FM.TOOLTIP_ACTION_SCORE]: 'Score:',
        [FM.TOOLTIP_ACTION_SCORE_PERCENT]: 'Conversation Learner confidence in performing an Action',
        [FM.TOOLTIP_ACTION_SCORE_TRAINING]: `Action can't be scored yet as Conversation Learner is still training`,
        [FM.TOOLTIP_ACTION_SCORE_DISQUALIFIED]: 'Action has been disqualified - Required Entities are missing or Blocked Entites are present',

        [FM.TOOLTIP_ACTION_SUGGESTED]: `Hint to Conversation Learner that the user's reply to this Action will likely be a value for this Entity`,
        [FM.TOOLTIP_ACTION_SUGGESTED_TITLE]: 'Expected Response',
        [FM.TOOLTIP_ACTION_SUGGESTED_ROW1]: '"What is your name?"',
        [FM.TOOLTIP_ACTION_SUGGESTED_ROW2]: '$name',

        [FM.TOOLTIP_ACTION_TYPE]: 'One of the following:',
        [FM.TOOLTIP_ACTION_TYPE_TITLE]: 'Action Type',
        [FM.TOOLTIP_ACTION_TYPE_TEXT]: 'A text response',
        [FM.TOOLTIP_ACTION_TYPE_APILOCAL]: 'An API call to the Bot',
        [FM.TOOLTIP_ACTION_TYPE_APIAZURE]: 'An API call to an Azure Function',
        [FM.TOOLTIP_ACTION_TYPE_CARD]: 'Renders an Adaptive Card template',
        [FM.TOOLTIP_ACTION_WAIT]: 'When selected, Bot will wait for more user input before taking another action',
        [FM.TOOLTIP_ACTION_WAIT_TITLE]: 'Wait For Response',
        [FM.TOOLTIP_BOTINFO_INVALID]: 'This application contains Card or API references that do not exist in the running Bot',
        [FM.TOOLTIP_ENTITY_ACTION_DISQUALIFIED]: `Actions that are blocked from use if this Entity is set`,
        [FM.TOOLTIP_ENTITY_ACTION_REQUIRED]: `Actions that are only employed when this Entity is set`,
        [FM.TOOLTIP_ENTITY_EXTRACTOR_HELP]: `Select text to label it as an entity`,
        [FM.TOOLTIP_ENTITY_EXTRACTOR_WARNING]: 'Text Variations must contain the same detected Entities and the primary input text.',
        [FM.TOOLTIP_ENTITY_NAME]: 'Name of the Entity',
        [FM.TOOLTIP_ENTITY_VALUE]: 'What the Bot currently has in Memory for this Entity',
        [FM.TOOLTIP_ENTITY_TYPE]: 'Type of Entity: CUSTOM or name existing of Pre-Built Entity',
        [FM.TOOLTIP_EXAMPLE]: 'For Example:',
        [FM.TOOLTIP_LOGGING_TOGGLE]: 'Enables or disables logging of user conversations. When logging is enabled, Bot performance can be improved by providing corrections to Logs that contain undesired Bot responses.  The corrected Log Dialogs become new Training Dialogs',
        [FM.TOOLTIP_MEMORYMANAGER]: `The memory manager provides the following functions for manipulating the Bot's memory:`,
        [FM.TOOLTIP_MEMORYMANAGER_TITLE]: 'Memory Manager',
        [FM.TOOLTIP_PACKAGECREATOR_LIVE_TOGGLE]: 'When checked the new Tag will become the Live app served to users',
        [FM.TOOLTIP_TAG_EDITING]: 'The version (tag) of the application to edit in UI',
        [FM.TOOLTIP_TAG_LIVE]: 'The version (tag) of the application used when published to external channels (e.g. Skype)',
        [FM.TOOLTIP_TRAINDIALOG_INVALID]: 'This application contains Train Dialogs that have been invalided.  They must be edited and fixed to be included in training',

        // Train Dialogs
        [FM.TRAINDIALOGS_TITLE]: 'Train Dialogs',
        [FM.TRAINDIALOGS_SUBTITLE]: 'Train Dialogs are example conversations you want your bot to imitate',
        [FM.TRAINDIALOGS_CREATEBUTTONTITLE]: 'New Train Dialog',
        [FM.TRAINDIALOGS_CREATEBUTTONARIALDESCRIPTION]: 'Create a New Train Dialog',
        [FM.TRAINDIALOGS_FIRSTINPUT]: 'First Input',
        [FM.TRAINDIALOGS_LASTINPUT]: 'Last Input',
        [FM.TRAINDIALOGS_LASTRESPONSE]: 'Last Response',
        [FM.TRAINDIALOGS_TURNS]: 'Turns',

        // Tutorial Importer
        [FM.TUTORIALIMPORTER_TITLE]: 'Tutorials',

        // Validation
        [FM.VALIDATE_UNABLE_TO_EDIT]: 'Unable to Edit',
        [FM.VALIDATE_UNABLE_TO_BRANCH]: 'Unable to Branch',
        [FM.VALIDATE_UNABLE_TO_UNDO]: 'Unable to Undo',
        [FM.VALIDATE_ENTITY_REASON]: 'Bot API calls are behaving differently. Entities in memory do not match.',

        // ActionDetailsList
        [FM.ACTIONDETAILSLIST_COLUMNS_RESPONSE]: 'Response',
        [FM.ACTIONDETAILSLIST_COLUMNS_ARGUMENTS]: 'Arguments',
        [FM.ACTIONDETAILSLIST_COLUMNS_TYPE]: 'Action Type',
        [FM.ACTIONDETAILSLIST_COLUMNS_REQUIREDENTITIES]: 'Required Entities',
        [FM.ACTIONDETAILSLIST_COLUMNS_DISQUALIFYINGENTITIES]: 'Disqualifying Entities',
        [FM.ACTIONDETAILSLIST_COLUMNS_SUGGESTEDENTITY]: 'Expected Entity',
        [FM.ACTIONDETAILSLIST_COLUMNS_ISTERMINAL]: 'Wait',

        // TextVariationCreator
        [FM.TEXTVARIATION_PLACEHOLDER]: 'Add alternative input...',

        // ActionCreatorEditor
        [FM.ACTIONCREATOREDITOR_SAVEBUTTON_ARIADESCRIPTION]: 'Save',
        [FM.ACTIONCREATOREDITOR_SAVEBUTTON_TEXT]: 'Save',
        [FM.ACTIONCREATOREDITOR_CREATEBUTTON_ARIADESCRIPTION]: 'Create',
        [FM.ACTIONCREATOREDITOR_CREATEBUTTON_TEXT]: 'Create',
        [FM.ACTIONCREATOREDITOR_CANCELBUTTON_ARIADESCRIPTION]: 'Cancel',
        [FM.ACTIONCREATOREDITOR_CANCELBUTTON_TEXT]: 'Cancel',
        [FM.ACTIONCREATOREDITOR_DONEBUTTON_ARIADESCRIPTION]: 'Done',
        [FM.ACTIONCREATOREDITOR_DONEBUTTON_TEXT]: 'Done',
        [FM.ACTIONCREATOREDITOR_DELETEBUTTON_ARIADESCRIPTION]: 'Delete',
        [FM.ACTIONCREATOREDITOR_DELETEBUTTON_TEXT]: 'Delete',
        [FM.ACTIONCREATOREDITOR_TRAINDIALOGSBUTTON_ARIADESCRIPTION]: 'Train Dialogs',
        [FM.ACTIONCREATOREDITOR_TRAINDIALOGSBUTTON_TEXT]: 'Train Dialogs',
        [FM.ACTIONCREATOREDITOR_CONFIRM_DELETE_TITLE]: 'Are you sure you want to delete this action?',
        [FM.ACTIONCREATOREDITOR_CONFIRM_DELETE_WARNING]: 'This Action is used by one or more Training Dialogs.  If you proceed they will removed from training until fixed.',
        [FM.ACTIONCREATOREDITOR_CONFIRM_EDIT_TITLE]: 'Are you sure you want to edit this action?',
        [FM.ACTIONCREATOREDITOR_CONFIRM_EDIT_WARNING]: 'This edit will invalidate one or more Training Dialogs.  If you proceed they will removed from training until fixed.',
   
        // ActionScorer
        [FM.ACTIONSCORER_COLUMNS_RESPONSE]: 'Response',
        [FM.ACTIONSCORER_COLUMNS_ARGUMENTS]: 'Arguments',
        [FM.ACTIONSCORER_COLUMNS_SCORE]: 'Score',
        [FM.ACTIONSCORER_COLUMNS_ENTITIES]: 'Entities',
        [FM.ACTIONSCORER_COLUMNS_ISTERMINAL]: 'Wait',
        [FM.ACTIONSCORER_COLUMNS_TYPE]: 'Type',

        // AppCreator
        [FM.APPCREATOR_FIELDERROR_REQUIREDVALUE]: 'Required Value',
        [FM.APPCREATOR_FIELDERROR_ALPHANUMERIC]: 'Application name may only contain alphanumeric characters',
        [FM.APPCREATOR_FIELDERROR_DISTINCT]: 'Name is already in use.',
        [FM.APPCREATOR_TITLE]: 'Create a Conversation Learner App',
        [FM.APPCREATOR_FIELDS_NAME_LABEL]: 'Name',
        [FM.APPCREATOR_FIELDS_NAME_PLACEHOLDER]: 'Application Name...',
        [FM.APPCREATOR_FIELDS_LOCALE_LABEL]: 'Locale',
        [FM.APPCREATOR_CREATEBUTTON_ARIADESCRIPTION]: 'Create',
        [FM.APPCREATOR_CREATEBUTTON_TEXT]: 'Create',
        [FM.APPCREATOR_CANCELBUTTON_ARIADESCRIPTION]: 'Cancel',
        [FM.APPCREATOR_CANCELBUTTON_TEXT]: 'Cancel',

        // DemoImporter
        [FM.DEMOIMPORT_TITLE]: 'Import Demo Applications',
        [FM.DEMOIMPORT_BUTTON_ARIADESCRIPTION]: 'Import Demo Applications',
        [FM.DEMOIMPORT_BUTTON_TEXT]: 'Import',

        // ChatSessionModal
        [FM.CHATSESSIONMODAL_PRIMARYBUTTON_ARIADESCRIPTION]: 'Done Testing',
        [FM.CHATSESSIONMODAL_PRIMARYBUTTON_TEXT]: 'Done Testing',
        [FM.CHATSESSIONMODAL_EXPIREBUTTON_ARIADESCRIPTION]: 'Session Timeout',
        [FM.CHATSESSIONMODAL_EXPIREBUTTON_TEXT]: 'Session Timeout',

        // ConfirmCancelModal
        [FM.CONFIRMCANCELMODAL_PRIMARYBUTTON_TEXT]: 'Confirm',
        [FM.CONFIRMCANCELMODAL_DEFAULTBUTTON_TEXT]: 'Cancel',

        // EntityCreatorEditor
        [FM.ENTITYCREATOREDITOR_FIELDERROR_REQUIREDVALUE]: 'Required Value',
        [FM.ENTITYCREATOREDITOR_FIELDERROR_ALPHANUMERIC]: 'Entity name may only contain alphanumeric characters with no spaces.',
        [FM.ENTITYCREATOREDITOR_FIELDERROR_DISTINCT]: 'Name is already in use.',
        [FM.ENTITYCREATOREDITOR_ENTITYOPTION_NEW]: 'custom',
        [FM.ENTITYCREATOREDITOR_TITLE_CREATE]: 'Create an Entity',
        [FM.ENTITYCREATOREDITOR_TITLE_EDIT]: 'Edit Entity',
        [FM.ENTITYCREATOREDITOR_FIELDS_NAME_LABEL]: 'Entity Name',
        [FM.ENTITYCREATOREDITOR_FIELDS_NAME_PLACEHOLDER]: 'Name...',
        [FM.ENTITYCREATOREDITOR_FIELDS_TYPE_LABEL]: 'Entity Type',
        [FM.ENTITYCREATOREDITOR_FIELDS_PROGRAMMATICONLY_LABEL]: 'Programmatic Only',
        [FM.ENTITYCREATOREDITOR_FIELDS_MULTIVALUE_LABEL]: 'Multi-valued',
        [FM.ENTITYCREATOREDITOR_FIELDS_NEGATAABLE_LABEL]: 'Negatable',
        [FM.ENTITYCREATOREDITOR_PIVOT_EDIT]: 'Edit Entity',
        [FM.ENTITYCREATOREDITOR_PIVOT_REQUIREDFOR]: 'Required For Actions',
        [FM.ENTITYCREATOREDITOR_PIVOT_DISQUALIFIEDACTIONS]: 'Blocked Actions',
        [FM.ENTITYCREATOREDITOR_CREATEBUTTON_ARIADESCRIPTION]: 'Create',
        [FM.ENTITYCREATOREDITOR_CREATEBUTTON_TEXT]: 'Create',
        [FM.ENTITYCREATOREDITOR_SAVEBUTTON_ARIADESCRIPTION]: 'Save',
        [FM.ENTITYCREATOREDITOR_SAVEBUTTON_TEXT]: 'Save',
        [FM.ENTITYCREATOREDITOR_CANCELBUTTON_ARIADESCRIPTION]: 'Cancel',
        [FM.ENTITYCREATOREDITOR_CANCELBUTTON_TEXT]: 'Cancel',
        [FM.ENTITYCREATOREDITOR_DONEBUTTON_ARIADESCRIPTION]: 'Done',
        [FM.ENTITYCREATOREDITOR_DONEBUTTON_TEXT]: 'Done',
        [FM.ENTITYCREATOREDITOR_DELETEBUTTON_ARIADESCRIPTION]: 'Delete',
        [FM.ENTITYCREATOREDITOR_DELETEBUTTON_TEXT]: 'Delete',
        [FM.ENTITYCREATOREDITOR_TRAINDIALOGSBUTTON_ARIADESCRIPTION]: 'Train Dialogs',
        [FM.ENTITYCREATOREDITOR_TRAINDIALOGSBUTTON_TEXT]: 'Train Dialogs',
        [FM.ENTITYCREATOREDITOR_CONFIRM_DELETE_TITLE]: 'Are you sure you want to delete this Entity?',
        [FM.ENTITYCREATOREDITOR_CONFIRM_DELETE_WARNING]: 'This Entity is used by one or more Training Dialogs.  If you proceed it will also be removed from these Training Dialogs.',
        [FM.ENTITYCREATOREDITOR_CONFIRM_EDIT_TITLE]: 'Are you sure you want to edit this Entity?',
        [FM.ENTITYCREATOREDITOR_CONFIRM_EDIT_WARNING]: 'This edit will invalidate one or more Training Dialogs.  If you proceed they will removed from training until fixed.',
        [FM.ENTITYCREATOREDITOR_DELETE_ERROR_TITLE]: 'Unable to delete this Entity',
        [FM.ENTITYCREATOREDITOR_DELETE_ERROR_WARNING]: 'It is used by one or more Actions',

        // Error
        [FM.ERROR_ERROR]: 'Error',
        [FM.ERROR_WARNING]: 'Warning',
        [FM.ERROR_PRIMARYBUTTON_ARIADESCRIPTION]: 'Ok',
        [FM.ERROR_PRIMARYBUTTON_TEXT]: 'Ok',

        // LogDialogModal
        [FM.LOGDIALOGMODAL_DEFAULTBUTTON_ARIADESCRIPTION]: 'Delete',
        [FM.LOGDIALOGMODAL_DEFAULTBUTTON_TEXT]: 'Delete',
        [FM.LOGDIALOGMODAL_PRIMARYBUTTON_ARIADESCRIPTION]: 'Done',
        [FM.LOGDIALOGMODAL_PRIMARYBUTTON_TEXT]: 'Done',
        [FM.LOGDIALOGMODAL_CONFIRMDELETE_TITLE]: 'Are you sure you want to delete this Log Dialog?',

        // LogoutModal
        [FM.LOGOUT_TITLE]: 'Log Out',
        [FM.LOGOUT_PRIMARYBUTTON_ARIADESCRIPTION]: 'Log Out',
        [FM.LOGOUT_PRIMARYBUTTON_TEXT]: 'Log Out',
        [FM.LOGOUT_DEFAULTBUTTON_ARIADESCRIPTION]: 'Cancel',
        [FM.LOGOUT_DEFAULTBUTTON_TEXT]: 'Cancel',

        // MemoryTable
        [FM.MEMORYTABLE_EMPTY]: 'Empty',

        // PackageCreator
        [FM.PACKAGECREATOR_TITLE]: 'Create a new Tag',
        [FM.PACKAGECREATOR_TAG_LABEL]: 'Name',
        [FM.PACKAGECREATOR_TAG_PLACEHOLDER]: 'Tag Name',
        [FM.PACKAGECREATOR_LIVE_LABEL]: 'Make Live Version',
        [FM.PACKAGECREATOR_CREATEBUTTON_ARIADESCRIPTION]: 'Create',
        [FM.PACKAGECREATOR_CREATEBUTTON_TEXT]: 'Create',
        [FM.PACKAGECREATOR_CANCELBUTTON_ARIADESCRIPTION]: 'Cancel',
        [FM.PACKAGECREATOR_CANCELBUTTON_TEXT]: 'Cancel',

        // SessionMemoryCheck
        [FM.SESSIONMEMORYCHECK_KEEPBUTTON_ARIADESCRIPTION]: 'Keep',
        [FM.SESSIONMEMORYCHECK_KEEPBUTTON_TEXT]: 'Keep',
        [FM.SESSIONMEMORYCHECK_CLEARBUTTON_ARIADESCRIPTION]: 'Clear',
        [FM.SESSIONMEMORYCHECK_CLEARBUTTON_TEXT]: 'Clear',
        [FM.SESSIONMEMORYCHECK_DESCRIPTION_ARIADESCRIPTION]: 'The above memories were preserved in the "OnSessionEndCallback".  What would you like to do with them for this session?',
        [FM.SESSIONMEMORYCHECK_DESCRIPTION_TEXT]: 'The above memories were preserved in the "OnSessionEndCallback".  What would you like to do with them for this session?',

        // TeachSessionAdmin
        [FM.TEACHSESSIONADMIN_DIALOGMODE_USER]: 'User Input',
        [FM.TEACHSESSIONADMIN_DIALOGMODE_BOT]: 'Bot Response',
        [FM.TEACHSESSIONADMIN_MEMORY_TITLE]: 'Entity Memory',
        [FM.TEACHSESSIONADMIN_ENTITYDETECTION_TITLE]: 'Entity Detection',
        [FM.TEACHSESSIONADMIN_ACTION_TITLE]: 'Action',
        [FM.TEACHSESSIONADMIN_TRAINSTATUS_COMPLETED]: 'Train Status: Completed',
        [FM.TEACHSESSIONADMIN_TRAINSTATUS_NEWSCORES]: 'New Scores Available',
        [FM.TEACHSESSIONADMIN_TRAINSTATUS_REFRESH]: 'Refresh',
        [FM.TEACHSESSIONADMIN_TRAINSTATUS_FAILED]: 'Train Status: Failed',
        [FM.TEACHSESSIONADMIN_TRAINSTATUS_RUNNING]: 'Train Status: Runnning...',

        // TeachSessionModal
        [FM.TEACHSESSIONMODAL_UNDO_ARIADESCRIPTION]: 'Undo Step',
        [FM.TEACHSESSIONMODAL_UNDO_TEXT]: 'Undo Step',
        [FM.TEACHSESSIONMODAL_EDIT_ABANDON_BUTTON_TEXT]: 'Abandon Edit',
        [FM.TEACHSESSIONMODAL_TEACH_ABANDON_BUTTON_TEXT]: 'Abandon Teach',
        [FM.TEACHSESSIONMODAL_EDIT_DONE_BUTTON_TEXT]: 'Done Editing',
        [FM.TEACHSESSIONMODAL_TEACH_DONE_BUTTON_TEXT]: 'Done Teaching',
        [FM.TEACHSESSIONMODAL_TEACH_CONFIRMDELETE_TITLE]: 'Are you sure you want to abandon this teach session?',
        [FM.TEACHSESSIONMODAL_EDIT_CONFIRMDELETE_TITLE]: 'Are you sure you want to cancel editing?',

        // TrainDialogAdmin
        [FM.TRAINDIALOGADMIN_DIALOGMODE_USER]: 'User Input',
        [FM.TRAINDIALOGADMIN_DIALOGMODE_TEXT]: 'Bot Response',
        [FM.TRAINDIALOGADMIN_MEMORY_TITLE]: 'Memory',
        [FM.TRAINDIALOGADMIN_HELPTEXT_TITLE]: 'Train Dialog',
        [FM.TRAINDIALOGADMIN_HELPTEXT_DESCRIPTION]: 'Click on User or Bot dialogs to the left to view steps in the Train Dialog.',
        [FM.TRAINDIALOGADMIN_HELPTEXT_DESCRIPTION2]: 'You can then make changes to the Train Dialog.',
        [FM.TRAINDIALOGADMIN_ENTITYDETECTION_TITLE]: 'Entity Detection',
        [FM.TRAINDIALOGADMIN_ENTITYDETECTION_HELPTEXT]: 'Click on text from the dialog to the left.',
        [FM.TRAINDIALOGADMIN_ACTION_TITLE]: 'Action',
        [FM.TRAINDIALOGADMIN_SAVECHANGES_TITLE]: 'Your changes will invalidate the subsequent steps in the Train Dialog',
        [FM.TRAINDIALOGADMIN_SAVECHANGES_DESCRIPTION]: 'Truncate and edit the Train Dialog at this step?',
        [FM.TRAINDIALOGADMIN_SAVECHANGES_PRIMARYBUTTON_TEXT]: 'Yes',
        [FM.TRAINDIALOGADMIN_SAVECHANGES_DEFAULTBUTTON_TEXT]: 'No',

        // TrainDialogModal
        [FM.TRAINDIALOGMODAL_BRANCH_ARIADESCRIPTION]: 'Branch',
        [FM.TRAINDIALOGMODAL_BRANCH_TEXT]: 'Branch',
        [FM.TRAINDIALOGMODAL_BRANCH_TIP] : 'First select a round in the conversation by clicking on it.  Then click "Branch" to create a new Training Dialog starting at that round.',
        [FM.TRAINDIALOGMODAL_DEFAULTBUTTON_ARIADESCRIPTION]: 'Delete',
        [FM.TRAINDIALOGMODAL_DEFAULTBUTTON_TEXT]: 'Delete',
        [FM.TRAINDIALOGMODAL_PRIMARYBUTTON_ARIADESCRIPTION]: 'Done',
        [FM.TRAINDIALOGMODAL_PRIMARYBUTTON_TEXT]: 'Done',
        [FM.TRAINDIALOGMODAL_CONFIRMDELETE_TITLE]: 'Are you sure you want to delete this Training Dialog?',
    },
    'ko': {
        [FM.ABOUT_TITLE]: '약',
        [FM.DOCS_TITLE]: '선적 서류 비치',
        [FM.LOGIN_TITLE]: '로그인',
        [FM.SUPPORT_TITLE]: '지원하다',
        [FM.NOMATCH_TITLE]: '페이지를 찾을 수 없습니다.',
        [FM.NOMATCH_HOME]: '집',
        [FM.PAGE_COMINGSOON]: '출시 예정 ...',

        // App
        [FM.APP_HEADER_MYAPPS]: '집',
        [FM.APP_HEADER_ABOUT]: '약',
        [FM.APP_HEADER_DOCS]: '선적 서류 비치',
        [FM.APP_HEADER_SUPPORT]: '지원하다',
        [FM.APPSLIST_CONFIRMCANCELMODALTITLE]: '이 애플리케이션을 삭제 하시겠습니까?',
        [FM.APPSLIST_COLUMN_NAME]: '이름',
        [FM.APPSLIST_COLUMNS_LOCALE]: '장소',
        [FM.APPSLIST_COLUMNS_LINKEDBOTS]: '연결된 봇',
        [FM.APPSLIST_COLUMNS_ACTIONS]: '행위',

        // Apps List
        [FM.APPSLIST_SUBTITLE]: '내 앱',
        [FM.APPSLIST_SUBTITLE]: 'Conversation Learner 응용 프로그램 작성 및 관리 ...',
        [FM.APPSLIST_CREATEBUTTONARIADESCRIPTION]: '새 응용 프로그램 만들기',
        [FM.APPSLIST_CREATEBUTTONTEXT]: '새 앱',

        // TODO: I think there are special localization experts within Microsoft who can fill this in for us.
    }
}