const tpplugin = app.plugins.plugins["templater-obsidian"].templater
const tp = tpplugin.functions_generator.internal_functions.modules_array
const tp_system = tp.find(m => m.name == "system")
const tp_file = tp.find(m => m.name == "file")


/*
async suggester(text_items: string[] ⎮ ((item: T) => string), items: T[], throw_on_cancel: boolean = false, placeholder: string = "", limit?: number = undefined)
*/
const suggester = tp_system.generate_suggester();

/*
async multi_suggester(text_items: string[] ⎮ ((item: T) => string), items: T[], throw_on_cancel: boolean = false, title: string = "", limit?: number = undefined)
*/
const multiSuggester = tp_system.generate_multi_suggester();
/*
async prompt(prompt_text?: string, default_value?: string, throw_on_cancel: boolean = false, multiline?: boolean = false)
*/
const prompt = tp_system.generate_prompt()

/*
create_new(template: TFile ⎮ string, filename?: string, open_new: boolean = false, folder?: TFolder | string)
*/
const create_new = tp_file.generate_create_new();

return {
    system: {
        suggester,
        multiSuggester,
        prompt,
    },
    file: {
        create_new
    }
}
