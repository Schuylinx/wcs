import { Component, Listen, Prop, State } from '@stencil/core';

@Component({
    tag: 'wcs-select',
})
export class Select {
    /** Whether the select menu is open or not */
    @State() opened = false;
    @State() selectedValue: any;
    @Prop() placeholder: string;
    @Prop() options: any[];

    onClick(event: MouseEvent) {
        event.stopPropagation();
        this.opened = !this.opened;
    }

    getActiveClass(): string {
        return this.opened ? 'active ' : '';
    }

    getButtonIcon(): string {
        return this.opened ? 'icons-arrow-up' : 'icons-arrow-down';
    }

    formControlClass(): string {
        return !this.selectedValue ? 'is-placeholder' : '';
    }

    private select(value: any) {
        this.selectedValue = value;
    }

    @Listen('window:click')
    closeWhenClickOutside() {
        if (this.opened) {
            this.opened = false;
        }
    }

    render() {
        return (
            // Add active class
            <div class={this.getActiveClass() + 'select-improved'} onClick={ev => this.onClick(ev)}>
                <div class="select-control">
                    <div class="input-group">
                        <div class={this.formControlClass() + ' form-control d-flex align-items-center'}>
                            {this.selectedValue ? this.selectedValue : this.placeholder}
                        </div>
                        <select class="sr-only">
                            {this.options.map(opt => <option>{opt}</option>)}
                        </select>
                        <div class={this.getActiveClass() + 'input-group-append input-group-last'}>
                            {/* Add Active class */}
                            <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
                                <i class={this.getButtonIcon() + ' icons-size-x75'}></i>
                            </button>
                        </div>
                    </div>
                    <div class="select-menu">
                        <div class="d-flex flex-column">
                            <div class="flex-fluid overflow-y">
                                {this.options.map(opt =>
                                    <button class="select-menu-item" onClick={_evt => this.select(opt)}>{opt}</button>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
