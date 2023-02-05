// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";
import * as utilities from "../utilities";

import * as pulumiAws from "@pulumi/aws";

export class AuditLogging extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'cloud-toolkit-aws:landingzone:AuditLogging';

    /**
     * Returns true if the given object is an instance of AuditLogging.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuditLogging {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuditLogging.__pulumiType;
    }

    /**
     * The S3 Bucket used to store the data.
     */
    public /*out*/ readonly bucket!: pulumi.Output<pulumiAws.s3.BucketV2>;
    /**
     * The S3 Bucket ACL.
     */
    public /*out*/ readonly bucketAcl!: pulumi.Output<pulumiAws.s3.BucketAclV2>;
    /**
     * The S3 Bucket Lifecycle Configuration to configure data retention on S3 Bucket.
     */
    public /*out*/ readonly bucketLifecycleConfiguration!: pulumi.Output<pulumiAws.s3.BucketLifecycleConfigurationV2>;
    /**
     * The S3 Bucket policy.
     */
    public /*out*/ readonly bucketPolicy!: pulumi.Output<pulumiAws.s3.BucketPolicy>;
    /**
     * The S3 Bucket Public Access Block to make data private.
     */
    public /*out*/ readonly bucketPublicAccessBlock!: pulumi.Output<pulumiAws.s3.BucketPublicAccessBlock>;
    /**
     * The CloudWatch dashboard to review the audit logs.
     */
    public /*out*/ readonly cloudWatchDashboard!: pulumi.Output<pulumiAws.cloudwatch.Dashboard | undefined>;
    /**
     * The CloudWatch Log Group used to store the data.
     */
    public /*out*/ readonly cloudWatchLogGroup!: pulumi.Output<pulumiAws.cloudwatch.LogGroup | undefined>;
    /**
     * The IAM Policy used by the IAM Role for Cloud Trail.
     */
    public /*out*/ readonly cloudWatchPolicy!: pulumi.Output<pulumiAws.iam.Policy | undefined>;
    /**
     * The IAM Role used by Cloud Trail to write to CloudWatch..
     */
    public /*out*/ readonly cloudWatchRole!: pulumi.Output<pulumiAws.iam.Role | undefined>;
    /**
     * The IAM Role Policy Attachments that attach the IAM Role with the IAM Policy.
     */
    public /*out*/ readonly cloudWatchRolePolicyAttachment!: pulumi.Output<pulumiAws.iam.RolePolicyAttachment | undefined>;
    /**
     * The AWS Organization id.
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The AWS Organization master account id.
     */
    public /*out*/ readonly organizationMasterAccountId!: pulumi.Output<string>;
    /**
     * The Cloud Trail.
     */
    public /*out*/ readonly trail!: pulumi.Output<pulumiAws.cloudtrail.Trail>;

    /**
     * Create a AuditLogging resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AuditLoggingArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["bucketProvider"] = args ? args.bucketProvider : undefined;
            resourceInputs["cloudwatch"] = args ? args.cloudwatch : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["retentionDays"] = args ? args.retentionDays : undefined;
            resourceInputs["bucket"] = undefined /*out*/;
            resourceInputs["bucketAcl"] = undefined /*out*/;
            resourceInputs["bucketLifecycleConfiguration"] = undefined /*out*/;
            resourceInputs["bucketPolicy"] = undefined /*out*/;
            resourceInputs["bucketPublicAccessBlock"] = undefined /*out*/;
            resourceInputs["cloudWatchDashboard"] = undefined /*out*/;
            resourceInputs["cloudWatchLogGroup"] = undefined /*out*/;
            resourceInputs["cloudWatchPolicy"] = undefined /*out*/;
            resourceInputs["cloudWatchRole"] = undefined /*out*/;
            resourceInputs["cloudWatchRolePolicyAttachment"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["organizationMasterAccountId"] = undefined /*out*/;
            resourceInputs["trail"] = undefined /*out*/;
        } else {
            resourceInputs["bucket"] = undefined /*out*/;
            resourceInputs["bucketAcl"] = undefined /*out*/;
            resourceInputs["bucketLifecycleConfiguration"] = undefined /*out*/;
            resourceInputs["bucketPolicy"] = undefined /*out*/;
            resourceInputs["bucketPublicAccessBlock"] = undefined /*out*/;
            resourceInputs["cloudWatchDashboard"] = undefined /*out*/;
            resourceInputs["cloudWatchLogGroup"] = undefined /*out*/;
            resourceInputs["cloudWatchPolicy"] = undefined /*out*/;
            resourceInputs["cloudWatchRole"] = undefined /*out*/;
            resourceInputs["cloudWatchRolePolicyAttachment"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["organizationMasterAccountId"] = undefined /*out*/;
            resourceInputs["trail"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AuditLogging.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a AuditLogging resource.
 */
export interface AuditLoggingArgs {
    /**
     * The AWS provider to used to create the Bucket.
     */
    bucketProvider?: pulumi.Input<pulumiAws.Provider>;
    /**
     * Store the audit logs in CloudWatch to enable easy searching.
     */
    cloudwatch?: pulumi.Input<inputs.landingzone.AuditLoggingCloudWatchArgs>;
    /**
     * The region to be used to store the data.
     */
    region?: pulumi.Input<string>;
    /**
     * The data retention in days. Defaults to '7'.
     */
    retentionDays?: pulumi.Input<number>;
}
