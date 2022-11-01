import { choiceSelect } from "../../../utils/choices";

export default {
  apiVersion: state => state.apiVersion,
  commentAttachmentModel: state => {
    return choiceSelect(state, "comment_attachment_model");
  },
  buildingTypeSelect: state => {
    return choiceSelect(state, "building_type");
  },
  categoryRecordStatusSelect: state => {
    return choiceSelect(state, "category_record_status");
  },
  countrySelect: state => {
    return choiceSelect(state, "countries");
  },
  currencySelect: state => {
    return choiceSelect(state, "currencies");
  },
  departmentTypeSelect: state => {
    return choiceSelect(state, "department_type");
  },
  filterHistoryActionSelect: state => {
    return choiceSelect(state, "history_action");
  },
  migrationBudgetSelect: state => {
    return choiceSelect(state, "migration_budget_choices");
  },
  migrationFreeformConversionSelect: state => {
    return choiceSelect(state, "migration_freeform_conversion_choices");
  },
  migrationRefIDSelect: state => {
    return choiceSelect(state, "migration_refid_choices");
  },
  measuringUnitSelect: state => {
    return choiceSelect(state, "measuring_units");
  },
  orgBusinessTypeSelect: state => {
    return choiceSelect(state, "organization_business_type");
  },
  orgContactTypeSelect: state => {
    return choiceSelect(state, "organization_contact_type");
  },
  orgNoteTypeSelect: state => {
    return choiceSelect(state, "organization_note_type");
  },
  orgStatusSelect: state => {
    return choiceSelect(state, "organization_status");
  },
  orgTypeSelect: state => {
    return choiceSelect(state, "organization_type");
  },
  projFundingSourceSelect: state => {
    return choiceSelect(state, "project_funding_source");
  },
  projPermissionTypeSelect: state => {
    return choiceSelect(state, "project_permission_type");
  },
  projStatusSelect: state => {
    return choiceSelect(state, "project_status");
  },
  projTypeSelect: state => {
    return choiceSelect(state, "project_type");
  },
  reportGroupBySelect: state => {
    return choiceSelect(state, "report_groups");
  },
  reportRowCondenseModeSelect: state => {
    return choiceSelect(state, "report_row_condense_mode");
  },
  reportHeaderContentSelect: state => {
    return choiceSelect(state, "report_header_contents");
  },
  reportIdContentSelect: state => {
    return choiceSelect(state, "report_id_layout_contents");
  },
  reportMarginTextContentSelect: state => {
    return choiceSelect(state, "report_margin_text_contents");
  },
  reportAdditionalResourcesSelect: state => {
    return choiceSelect(state, "report_additional_resources");
  },
  reportPivotGroupBySelect: state => {
    return choiceSelect(state, "report_pivot_group_by");
  },
  resourceTypeSelect: state => {
    return choiceSelect(state, "resource_type");
  },
  resourceScopeSelect: state => {
    return choiceSelect(state, "resource_scope");
  },
  resourceScopeGrantedSelect: state => {
    return choiceSelect(state, "resource_scope_granted");
  },
  skuArchCodeSelect: state => {
    return choiceSelect(state, "sku_architectural_code");
  },
  skuElectricalCurrentSelect: state => {
    return choiceSelect(state, "sku_attrs_electrical_current");
  },
  skuElectricalHertzSelect: state => {
    return choiceSelect(state, "sku_attrs_electrical_hertz");
  },
  skuElectricalPhaseSelect: state => {
    return choiceSelect(state, "sku_attrs_electrical_phase");
  },
  skuElectricalPlugTypeSelect: state => {
    return choiceSelect(state, "sku_attrs_electrical_plug_type");
  },
  skuElectricalUpsSelect: state => {
    return choiceSelect(state, "sku_attrs_electrical_ups");
  },
  skuElectricalVoltageSelect: state => {
    return choiceSelect(state, "sku_attrs_electrical_voltage");
  },
  skuFeatureShieldingTypeSelect: state => {
    return choiceSelect(state, "sku_attrs_feature_shielding_type");
  },
  skuMechanicalDissipationTypeSelect: state => {
    return choiceSelect(state, "sku_attrs_mechanical_dissipation_type");
  },
  skuMechanicalVentTypeSelect: state => {
    return choiceSelect(state, "sku_attrs_mechanical_vent_type");
  },
  skuPhysicalFreightClassSelect: state => {
    return choiceSelect(state, "sku_attrs_physical_freight_class");
  },
  skuPhysicalMountingSelect: state => {
    return choiceSelect(state, "sku_attrs_physical_mounting");
  },
  skuPhysicalUnitSelect: state => {
    return choiceSelect(state, "sku_attrs_physical_unit");
  },
  skuPlumbingDrainLocationSelect: state => {
    return choiceSelect(state, "sku_attrs_plumbing_drain_location");
  },
  skuPlumbingGasLocationSelect: state => {
    return choiceSelect(state, "sku_attrs_plumbing_gas_location");
  },
  skuPlumbingGasTypeSelect: state => {
    return choiceSelect(state, "sku_attrs_plumbing_gas_type");
  },
  skuTechConnectionTypeSelect: state => {
    return choiceSelect(state, "sku_attrs_technology_connection_type");
  },
  skuTechNetworkTypeSelect: state => {
    return choiceSelect(state, "sku_attrs_technology_network_type");
  },
  skuTechSystemTypeSelect: state => {
    return choiceSelect(state, "sku_attrs_technology_system_type");
  },
  skuPriceTypeSelect: state => {
    return choiceSelect(state, "sku_price_type");
  },
  skuResponsibilityCodeSelect: state => {
    return choiceSelect(state, "sku_responsibility_code");
  },
  skuStatusSelect: state => {
    return choiceSelect(state, "sku_status");
  },
  skuTypeSelect: state => {
    return choiceSelect(state, "sku_type");
  },
  skupArchitecturalCodeSelect: state => {
    return choiceSelect(state, "skup_architectural_code");
  },
  skupOrderStatus: state => {
    return choiceSelect(state, "skup_order_status");
  },
  skupPriceTypeSelect: state => {
    return choiceSelect(state, "skup_price_types");
  },
  bulkSkupPriceTypeSelect: state => {
    return choiceSelect(state, "bulk_skup_price_types");
  },
  skupResponsibilityCodeSelect: state => {
    return choiceSelect(state, "skup_responsibility_code");
  },
  skupStageSelect: state => {
    return choiceSelect(state, "skup_stage_choices");
  },
  skupStateSelect: state => {
    return choiceSelect(state, "skup_state_choices");
  },
  stateSelect: state => {
    return choiceSelect(state, "us_states");
  },
  supplierSkuMarketStatusSelect: state => {
    return choiceSelect(state, "supplier_sku_market_status");
  },
  supplierSkuPriceTypeSelect: state => {
    return choiceSelect(state, "supplier_sku_price_type");
  },
  templateTypeSelect: state => {
    return choiceSelect(state, "template_type");
  },
  customBudgetTypeSelect: state => {
    return choiceSelect(state, "custom_budget_type");
  },
  projectSkupPitStageSelect: state => {
    return choiceSelect(state, "project_skup_pit_stage");
  },
  customColumnDefinitionTypeSelect: state => {
    return choiceSelect(state, "custom_column_definition_type");
  },
  customColumnDefinitionStatusSelect: state => {
    return choiceSelect(state, "custom_column_definition_status");
  },
  customColumnPerProjectStatusSelect: state => {
    return choiceSelect(state, "column_status_per_project_status");
  },
  customColumnChoicesStatusSelect: state => {
    return choiceSelect(state, "custom_column_choices_status");
  },
  columnLocationSelect: state => {
    return choiceSelect(state, "column_location");
  },
  areaPhaseBulkItemsSelect: state => {
    return choiceSelect(state, "area_phase_bulk_items_choices");
  },
  approvalGroupStatusSelect: state => {
    return choiceSelect(state, "approval_group_status_choices");
  },
  approvalGroupScopeSelect: state => {
    return choiceSelect(state, "approval_group_scope_choices");
  },
  requisitionGpoAffiliationSelect: state => {
    return choiceSelect(state, "requisition_gpo_affiliation_choices");
  },
  requisitionRowDesignationSelect: state => {
    return choiceSelect(state, "requisition_row_design_action_choices");
  },
  requisitionStatusSelect: state => {
    return choiceSelect(state, "requisition_status_choices");
  },
  templateType: state => {
    return choiceSelect(state, "template_type");
  },
  altIdScopeSelect: state => {
    return choiceSelect(state, "alt_id_scope");
  },
  requisitionStatusChoices: state => {
    return choiceSelect(state, "requisition_status_choices");
  },
  requisitionRowDesignActionChoices: state => {
    return choiceSelect(state, "requisition_row_design_action_choices");
  },
  requistionVendorType: state => {
    return choiceSelect(state, "requisition_vendor_action_choices");
  }
};
