import { Component } from '@stencil/core';

@Component({
    tag: 'wcs-app'
})
export class App {
    private options: any[] = [1, 2, 3];
    render() {
        return (
            <wcs-select options={this.options} placeholder="Placeholder">
            </wcs-select>
        );
    }
}
