class Materias {
    
    get form(){
        return $('//span[contains(text(),"Form field")]');
    }

    get firstDropWindow(){
        return $('//div[@id="mat-select-value-1"]');
    }
    
    get optionsList(){
        return $('//div[@role="listbox"]');
    }

    get firstOpt(){
        return $('#mat-option-0');
    }

    get firstOptText(){
        return $('.mat-option-text');
    }

    get badgePage(){
        return $('//span[contains(text()," Badge ")]');
    }

    get copyBtn(){
        return $('//button[@aria-label="Copy link to Badge overview example to the clipboard"]');s
    }

    get tooltip(){
        return $('.mat-tooltip.mat-tooltip-show');
    }

    get linkCDK(){
        return $('//a[@href="/cdk"]');
    }

    get dragDrop(){
        return $('//span[contains(text()," Drag and Drop ")]');
    }

    get exampleWindow(){
        return $('#cdk-drag-drop-overview');
    }

    get dragObj(){
        return $('//*[@id="cdk-drag-drop-overview"]/div/div[2]/cdk-drag-drop-overview-example/div');
    }
}

module.exports = new Materias();