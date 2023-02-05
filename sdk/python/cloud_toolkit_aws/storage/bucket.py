# coding=utf-8
# *** WARNING: this file was generated by Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities
from ._enums import *
from ._inputs import *
import pulumi_aws

__all__ = ['BucketArgs', 'Bucket']

@pulumi.input_type
class BucketArgs:
    def __init__(__self__, *,
                 bucket_name: Optional[pulumi.Input[str]] = None,
                 bucket_name_prefix: Optional[pulumi.Input[str]] = None,
                 encryption: Optional[pulumi.Input['BucketEncryptionArgs']] = None,
                 public: Optional[pulumi.Input[bool]] = None,
                 replication: Optional[pulumi.Input['BucketReplicationArgs']] = None,
                 versioning: Optional[pulumi.Input['BucketVersioningState']] = None,
                 website: Optional[pulumi.Input['BucketWebsiteArgs']] = None):
        """
        The set of arguments for constructing a Bucket resource.
        :param pulumi.Input[str] bucket_name: Configures bucket name in AWS.
        :param pulumi.Input[str] bucket_name_prefix: Configures a random bucket name in AWS but specifying a prefix name.
        :param pulumi.Input['BucketEncryptionArgs'] encryption: Configures encryption parameters for the bucket
        :param pulumi.Input[bool] public: Set to true to allow policies that may provide access to anyone.
        :param pulumi.Input['BucketReplicationArgs'] replication: Configures replication parameters for the bucket
        :param pulumi.Input['BucketVersioningState'] versioning: Set a certain versioning mode for bucket objects
        :param pulumi.Input['BucketWebsiteArgs'] website: Configures a static webpage using bucket files
        """
        if bucket_name is not None:
            pulumi.set(__self__, "bucket_name", bucket_name)
        if bucket_name_prefix is not None:
            pulumi.set(__self__, "bucket_name_prefix", bucket_name_prefix)
        if encryption is not None:
            pulumi.set(__self__, "encryption", encryption)
        if public is not None:
            pulumi.set(__self__, "public", public)
        if replication is not None:
            pulumi.set(__self__, "replication", replication)
        if versioning is not None:
            pulumi.set(__self__, "versioning", versioning)
        if website is not None:
            pulumi.set(__self__, "website", website)

    @property
    @pulumi.getter(name="bucketName")
    def bucket_name(self) -> Optional[pulumi.Input[str]]:
        """
        Configures bucket name in AWS.
        """
        return pulumi.get(self, "bucket_name")

    @bucket_name.setter
    def bucket_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "bucket_name", value)

    @property
    @pulumi.getter(name="bucketNamePrefix")
    def bucket_name_prefix(self) -> Optional[pulumi.Input[str]]:
        """
        Configures a random bucket name in AWS but specifying a prefix name.
        """
        return pulumi.get(self, "bucket_name_prefix")

    @bucket_name_prefix.setter
    def bucket_name_prefix(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "bucket_name_prefix", value)

    @property
    @pulumi.getter
    def encryption(self) -> Optional[pulumi.Input['BucketEncryptionArgs']]:
        """
        Configures encryption parameters for the bucket
        """
        return pulumi.get(self, "encryption")

    @encryption.setter
    def encryption(self, value: Optional[pulumi.Input['BucketEncryptionArgs']]):
        pulumi.set(self, "encryption", value)

    @property
    @pulumi.getter
    def public(self) -> Optional[pulumi.Input[bool]]:
        """
        Set to true to allow policies that may provide access to anyone.
        """
        return pulumi.get(self, "public")

    @public.setter
    def public(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "public", value)

    @property
    @pulumi.getter
    def replication(self) -> Optional[pulumi.Input['BucketReplicationArgs']]:
        """
        Configures replication parameters for the bucket
        """
        return pulumi.get(self, "replication")

    @replication.setter
    def replication(self, value: Optional[pulumi.Input['BucketReplicationArgs']]):
        pulumi.set(self, "replication", value)

    @property
    @pulumi.getter
    def versioning(self) -> Optional[pulumi.Input['BucketVersioningState']]:
        """
        Set a certain versioning mode for bucket objects
        """
        return pulumi.get(self, "versioning")

    @versioning.setter
    def versioning(self, value: Optional[pulumi.Input['BucketVersioningState']]):
        pulumi.set(self, "versioning", value)

    @property
    @pulumi.getter
    def website(self) -> Optional[pulumi.Input['BucketWebsiteArgs']]:
        """
        Configures a static webpage using bucket files
        """
        return pulumi.get(self, "website")

    @website.setter
    def website(self, value: Optional[pulumi.Input['BucketWebsiteArgs']]):
        pulumi.set(self, "website", value)


class Bucket(pulumi.ComponentResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 bucket_name: Optional[pulumi.Input[str]] = None,
                 bucket_name_prefix: Optional[pulumi.Input[str]] = None,
                 encryption: Optional[pulumi.Input[pulumi.InputType['BucketEncryptionArgs']]] = None,
                 public: Optional[pulumi.Input[bool]] = None,
                 replication: Optional[pulumi.Input[pulumi.InputType['BucketReplicationArgs']]] = None,
                 versioning: Optional[pulumi.Input['BucketVersioningState']] = None,
                 website: Optional[pulumi.Input[pulumi.InputType['BucketWebsiteArgs']]] = None,
                 __props__=None):
        """
        Cloud Toolkit component for Bcukets. Creates a Simple Bucket for object storage

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] bucket_name: Configures bucket name in AWS.
        :param pulumi.Input[str] bucket_name_prefix: Configures a random bucket name in AWS but specifying a prefix name.
        :param pulumi.Input[pulumi.InputType['BucketEncryptionArgs']] encryption: Configures encryption parameters for the bucket
        :param pulumi.Input[bool] public: Set to true to allow policies that may provide access to anyone.
        :param pulumi.Input[pulumi.InputType['BucketReplicationArgs']] replication: Configures replication parameters for the bucket
        :param pulumi.Input['BucketVersioningState'] versioning: Set a certain versioning mode for bucket objects
        :param pulumi.Input[pulumi.InputType['BucketWebsiteArgs']] website: Configures a static webpage using bucket files
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: Optional[BucketArgs] = None,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Cloud Toolkit component for Bcukets. Creates a Simple Bucket for object storage

        :param str resource_name: The name of the resource.
        :param BucketArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(BucketArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 bucket_name: Optional[pulumi.Input[str]] = None,
                 bucket_name_prefix: Optional[pulumi.Input[str]] = None,
                 encryption: Optional[pulumi.Input[pulumi.InputType['BucketEncryptionArgs']]] = None,
                 public: Optional[pulumi.Input[bool]] = None,
                 replication: Optional[pulumi.Input[pulumi.InputType['BucketReplicationArgs']]] = None,
                 versioning: Optional[pulumi.Input['BucketVersioningState']] = None,
                 website: Optional[pulumi.Input[pulumi.InputType['BucketWebsiteArgs']]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is not None:
            raise ValueError('ComponentResource classes do not support opts.id')
        else:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = BucketArgs.__new__(BucketArgs)

            __props__.__dict__["bucket_name"] = bucket_name
            __props__.__dict__["bucket_name_prefix"] = bucket_name_prefix
            __props__.__dict__["encryption"] = encryption
            __props__.__dict__["public"] = public
            __props__.__dict__["replication"] = replication
            __props__.__dict__["versioning"] = versioning
            __props__.__dict__["website"] = website
            __props__.__dict__["bucket"] = None
            __props__.__dict__["bucket_encryption"] = None
            __props__.__dict__["bucket_ownership"] = None
            __props__.__dict__["bucket_public_access"] = None
            __props__.__dict__["bucket_public_access_policy"] = None
            __props__.__dict__["bucket_versioning"] = None
            __props__.__dict__["read_only_bucket_policy"] = None
            __props__.__dict__["replication_config"] = None
            __props__.__dict__["replication_policy_attachment"] = None
            __props__.__dict__["role"] = None
            __props__.__dict__["write_bucket_policy"] = None
        super(Bucket, __self__).__init__(
            'cloud-toolkit-aws:storage:Bucket',
            resource_name,
            __props__,
            opts,
            remote=True)

    @property
    @pulumi.getter
    def bucket(self) -> pulumi.Output['pulumi_aws.s3.BucketV2']:
        """
        Instance of our Bucket
        """
        return pulumi.get(self, "bucket")

    @property
    @pulumi.getter(name="bucketEncryption")
    def bucket_encryption(self) -> pulumi.Output[Optional['pulumi_aws.s3.BucketServerSideEncryptionConfigurationV2']]:
        """
        Configuration for controlling bucket encryption
        """
        return pulumi.get(self, "bucket_encryption")

    @property
    @pulumi.getter(name="bucketOwnership")
    def bucket_ownership(self) -> pulumi.Output['pulumi_aws.s3.BucketOwnershipControls']:
        """
        Enforce that bucket owner is all bucket objects
        """
        return pulumi.get(self, "bucket_ownership")

    @property
    @pulumi.getter(name="bucketPublicAccess")
    def bucket_public_access(self) -> pulumi.Output['pulumi_aws.s3.BucketPublicAccessBlock']:
        """
        Controls that IAM policies complies with bucket visibility (public or private)
        """
        return pulumi.get(self, "bucket_public_access")

    @property
    @pulumi.getter(name="bucketPublicAccessPolicy")
    def bucket_public_access_policy(self) -> pulumi.Output[Optional['pulumi_aws.s3.BucketPolicy']]:
        """
        Policy to make public all objects if bucket visibility is public
        """
        return pulumi.get(self, "bucket_public_access_policy")

    @property
    @pulumi.getter(name="bucketVersioning")
    def bucket_versioning(self) -> pulumi.Output['pulumi_aws.s3.BucketVersioningV2']:
        """
        Configuration for controlling bucket versioning
        """
        return pulumi.get(self, "bucket_versioning")

    @property
    @pulumi.getter(name="readOnlyBucketPolicy")
    def read_only_bucket_policy(self) -> pulumi.Output['pulumi_aws.iam.Policy']:
        """
        Policy for read-only users
        """
        return pulumi.get(self, "read_only_bucket_policy")

    @property
    @pulumi.getter(name="replicationConfig")
    def replication_config(self) -> pulumi.Output[Optional['pulumi_aws.s3.BucketReplicationConfig']]:
        """
        Configuration to perform bucket replication
        """
        return pulumi.get(self, "replication_config")

    @property
    @pulumi.getter(name="replicationPolicyAttachment")
    def replication_policy_attachment(self) -> pulumi.Output[Optional['pulumi_aws.iam.RolePolicyAttachment']]:
        """
        Policy attachments to perform bucket replication
        """
        return pulumi.get(self, "replication_policy_attachment")

    @property
    @pulumi.getter
    def role(self) -> pulumi.Output['pulumi_aws.iam.Role']:
        """
        Required role for managing bucket
        """
        return pulumi.get(self, "role")

    @property
    @pulumi.getter
    def website(self) -> pulumi.Output[Optional['pulumi_aws.s3.BucketWebsiteConfigurationV2']]:
        """
        Configuration to setup a website
        """
        return pulumi.get(self, "website")

    @property
    @pulumi.getter(name="writeBucketPolicy")
    def write_bucket_policy(self) -> pulumi.Output['pulumi_aws.iam.Policy']:
        """
        Policy for write users
        """
        return pulumi.get(self, "write_bucket_policy")

