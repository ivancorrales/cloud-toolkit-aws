// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";

import * as pulumiAws from "@pulumi/aws";

export namespace email {
    export interface AdditionalQueueArgs {
        /**
         * Amazon Resource Name for the Queue component.
         */
        arn?: string;
        /**
         * Endpoint of the Queue component in AWS.
         */
        url?: string;
    }

    export interface DnsDkimRecordArgs {
        /**
         * Name of the Record.
         */
        name?: string;
        /**
         * Token of the Record.
         */
        token?: string;
    }

}

export namespace kubernetes {
}

export namespace landingZone {
    export interface AccountMappingArgs {
        account?: pulumiAws.organizations.Account;
        accountName?: string;
    }

    export interface OrganizationalUnitMapping {
        accountName?: string;
        organizationalUnit?: pulumiAws.organizations.OrganizationalUnit;
    }

}

export namespace serverless {
}

export namespace storage {
}