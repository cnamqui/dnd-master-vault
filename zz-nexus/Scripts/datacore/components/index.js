// Preload component promises at top so dc.require calls are centralized
const InputText = await dc.require('zz-nexus/Scripts/datacore/components/InputText.jsx')
const NumberInput = await dc.require('zz-nexus/Scripts/datacore/components/NumberInput.jsx')
const Dropdown = await dc.require('zz-nexus/Scripts/datacore/components/Dropdown.jsx')
const MultiSelect = await dc.require('zz-nexus/Scripts/datacore/components/MultiSelect.jsx')
const ActionButton = await dc.require('zz-nexus/Scripts/datacore/components/ActionButton.jsx')
const TableForm = await dc.require('zz-nexus/Scripts/datacore/components/TableForm.jsx')
const MultiFileTable = await dc.require('zz-nexus/Scripts/datacore/components/MultiFileTable.jsx')
const InfoBox = await dc.require('zz-nexus/Scripts/datacore/components/InfoBox.jsx')
const ListSuggesterBase = await dc.require('zz-nexus/Scripts/datacore/components/ListSuggesterBase.jsx')
const ListSuggesterAdd = await dc.require('zz-nexus/Scripts/datacore/components/ListSuggesterAdd.jsx')
const FileListSuggester = await dc.require('zz-nexus/Scripts/datacore/components/FileListSuggester.jsx')
const ImagePicker = await dc.require('zz-nexus/Scripts/datacore/components/ImagePicker.jsx')


// Provide an async loader that awaits the promises and returns the resolved components
const load = async () => {

  return {
    InputText,
    NumberInput,
    Dropdown,
    MultiSelect,
    ActionButton,
    TableForm,
    MultiFileTable,
    InfoBox,
    ListSuggesterBase,
    ListSuggesterAdd,
    FileListSuggester,
    ImagePicker,
  }
}

return { load }
