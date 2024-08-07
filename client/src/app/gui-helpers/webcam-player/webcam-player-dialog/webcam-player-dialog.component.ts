import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { GaugesManager } from '../../../gauges/gauges.component';
import { GaugeSettings, View } from '../../../_models/hmi';

@Component({
    selector: 'app-webcam-player-dialog',
    templateUrl: './webcam-player-dialog.component.html',
    styleUrls: ['./webcam-player-dialog.component.scss']
})
export class WebcamPlayerDialogComponent {

    constructor(public dialogRef: MatDialogRef<WebcamPlayerDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: WebcamPlayerDialogData) {
    }

    onCloseDialog() {
        this.dialogRef.close();
    }
}

export interface WebcamPlayerDialogData {
    bkColor: string;
    gaugesManager: GaugesManager;
    view: View;
    ga: GaugeSettings;
}
